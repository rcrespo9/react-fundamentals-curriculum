var React = require('react');
var PropTypes = require('prop-types');
var api = require('./utils/api');
var Link = require('react-router-dom').Link;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this);
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
    var encodeCity = window.encodeURI(this.state.city);

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

        <Link 
          className='weather-btn'
          to={{
            pathname: '/forecast',
            search: '?city=' + encodeCity
          }}>
          Get Weather
        </Link>
      </div>
    )
  } 
}

Form.propTypes = {
  alignment: PropTypes.string.isRequired
}

module.exports = Form;