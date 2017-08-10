var React = require('react');
var PropTypes = require('prop-types');
var api = require('./utils/api');
var queryString = require('query-string');
var moment = require('moment');

function ForecastHeader(props) {
  return (
    <h2 className="forecast-header">{props.text}</h2>
  )
}

ForecastHeader.propTypes = {
  text: PropTypes.string.isRequired
}

function ForecastItem(props) {
  var isClearSkyIcon = props.item.weather[0].icon === '01dd';
  var icon = isClearSkyIcon ? '01d' : props.item.weather[0].icon;
  var formattedDate = moment.unix(props.item.dt).format('dddd, MMMM Do');

  return (
    <figure className="day-container" onClick={props.clickHandler}>
      <img 
        className='day-icon'
        src={require('../images/weather-icons/' + icon + '.svg')}
        alt={props.item.weather[0].description}
      />
      <figcaption className="day-date">{formattedDate}</figcaption>
    </figure>
  )
}

ForecastItem.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      city: '',
      fiveDayForecast: null
    }
  }

  componentDidMount() {
    var cityObj = queryString.parse(this.props.location.search);
    var city = cityObj.city;
    
    api.getFiveDayForecast(city)
      .then(function(data) {
        console.log(data);
        this.setState({
          city: city,
          loading: false,
          fiveDayForecast: data.list
        });
      }.bind(this));
  }

  goToDetail(city) {
    var encodeCity = window.encodeURI(this.state.city);
    this.props.history.push({
      pathname: '/detail/' + encodeCity,
      state: city
    })
  }

  render() {
    if(this.state.loading) {
      return <ForecastHeader text='Loading' />
    } else {
      return (
        <div>
          <ForecastHeader text={this.state.city} />
          <div className="forecast-container">
            {this.state.fiveDayForecast.map(function(listItem) {
              return <ForecastItem clickHandler={this.goToDetail.bind(this, listItem)} key={listItem.dt} item={listItem} />
            }, this)}
          </div>
        </div>
      )
    }
  }
}

module.exports = Forecast;