var React = require('react');
var PropTypes = require('prop-types');
var api = require('./utils/api');
var Redirect = require('react-router').Redirect;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function() {
      return {
        city: value
      }
    })
  }

  handleOnClick() {
    this.setState({ redirect: true });
  }

  render() {
    if(this.state.redirect) {
      var encodeCity = window.encodeURI(this.state.city)

      return <Redirect push to={'/forecast?city=' + encodeCity} />
    }

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
          onClick={this.handleOnClick}
        >
          Get Weather
        </button>
      </div>
    )
  } 
}

Form.propTypes = {
  alignment: PropTypes.string.isRequired
}

module.exports = Form;