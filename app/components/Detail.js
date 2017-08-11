var React = require('react');
var ForecastItem = require('./ForecastItem');
var queryString = require('query-string');

function kelvinToFahrenheit(temp) {
  var formula = 1.8 * (temp - 273) + 32;
  return parseInt(formula, 10);
}

function DetailItem(props) {
  return(
    <ul className='detail-list'>
      <li className='detail-list-item'>{props.city}</li>
      <li className="detail-list-item">{props.item.weather[0].description}</li>
      <li className="detail-list-item">min temp: {kelvinToFahrenheit(props.item.temp.min)} degrees</li>
      <li className="detail-list-item">max temp: {kelvinToFahrenheit(props.item.temp.max)} degrees</li>
      <li className="detail-list-item">humidity: {props.item.humidity}</li>
    </ul>   
  )
}

class Detail extends React.Component {
  render() {
    var city = this.props.match.params.city;
    var detailProps = this.props.location.state;
    console.log(city);
    console.log(this.props.location.state);
    return (
      <div className='detail-container'>
        <ForecastItem item={detailProps} />
        <DetailItem city={city} item={detailProps} />
      </div>
    )
  }
}

module.exports = Detail;