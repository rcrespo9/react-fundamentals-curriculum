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

  handleSubmit(event) {
    event.preventDefault();

    // this.props.onSubmit(
    //   this.state.city,
    //   api.currentWeather(this.state.city)
    // )
  }
  render() {
    return (
      <form className={this.props.alignment} onSubmit={this.handleSubmit}>
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
          type='submit'
          disabled={!this.state.city}
        >
          Get Weather
        </button>
      </form>
    )
  } 
}

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form">
        <WeatherInput alignment={this.props.alignment} />
      </div>
    )
  }
}

module.exports = Form;