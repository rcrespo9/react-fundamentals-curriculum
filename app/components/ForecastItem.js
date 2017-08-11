var React = require('react');
var PropTypes = require('prop-types');
var moment = require('moment');

function ForecastItem(props) {
  var isClearSkyIcon = props.item.weather[0].icon === '01dd';
  var icon = isClearSkyIcon ? '01d' : props.item.weather[0].icon;
  var formattedDate = moment.unix(props.item.dt).format('dddd, MMMM Do');

  return (
    <figure className="day-container" onClick={props.clickHandler}>
      <img 
        className='day-icon'
        src={'/app/images/weather-icons/' + icon + '.svg'}
        alt={props.item.weather[0].description}
      />
      <figcaption className="day-date">{formattedDate}</figcaption>
    </figure>
  )
}

ForecastItem.propTypes = {
  item: PropTypes.object.isRequired
}

module.exports = ForecastItem;