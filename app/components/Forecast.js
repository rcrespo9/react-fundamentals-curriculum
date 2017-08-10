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

function ForecastGrid(props) {
  return (
    <div className="forecast-container">
      {props.list.map(function(item) {
        var isClearSkyIcon = item.weather[0].icon === '01dd';
        var icon = isClearSkyIcon ? '01d' : item.weather[0].icon;
        var formattedDate = moment.unix(item.dt).format('dddd, MMMM Do');
        
        return (
          <figure className="day-container" key={item.dt}>
            <img 
              className='day-icon'
              src={require('../images/weather-icons/' + icon + '.svg')}
              alt={item.weather[0].description}
            />
            <figcaption className="day-date">{formattedDate}</figcaption>
          </figure>
        )
      })}
    </div>
  )
}

ForecastGrid.propTypes = {
  list: PropTypes.array.isRequired
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

  render() {
    if(this.state.loading) {
      return <ForecastHeader text='Loading' />
    } else {
      return (
        <div>
          <ForecastHeader text={this.state.city} />
          <ForecastGrid list={this.state.fiveDayForecast} />
        </div>
      )
    }
  }
}

module.exports = Forecast;