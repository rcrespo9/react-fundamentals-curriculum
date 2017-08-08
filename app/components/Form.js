var React = require('react');
var PropTypes = require('prop-types');

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={this.props.alignment}>
        <input
          className='weather-input' 
          type='text'
          placeholder='New York, NY'
          autoComplete='off'
        />
        <button
          className='weather-btn'
        >
          Get Weather
        </button>
      </form>
    )
  }
}

module.exports = Form;