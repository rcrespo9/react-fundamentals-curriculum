var React = require('react');
var PropTypes = require('prop-types');
var api = require('./utils/api');
var queryString = require('query-string');

function ForecastHeader(props) {
  return (
    <h2 className="forecast-header">{props.text}</h2>
  )
}

ForecastHeader.propTypes = {
  text: PropTypes.string.isRequired
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
        <ForecastHeader text={this.state.city} />
      )
    }
  }
}

module.exports = Forecast;