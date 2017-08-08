var React = require('react');
var PropTypes = require('prop-types');
var api = require('./utils/api');

class WeatherInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function() {
      return {
        city: value
      }
    })
  }

  render() {
    return (
      <div className={'form-container ' + this.props.alignment}>
        <input
          id='city'
          className='weather-input' 
          type='text'
          placeholder='New York, NY'
          value={this.state.city}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          className='weather-btn'
          type='button'
        >
          Get Weather
        </button>
      </div>
    )
  } 
}

class div extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="div">
        <WeatherInput alignment={this.props.alignment} />
      </div>
    )
  }
}

module.exports = div;