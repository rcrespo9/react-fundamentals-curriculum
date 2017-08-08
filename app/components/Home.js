var React = require('react');
var Form = require('./Form');

class Home extends React.Component {
  render() {
    return(
      <div className="home-container">
        <h2>Enter a City and State</h2>
        <Form alignment='vertical' />
      </div>
    )
  }
}

module.exports = Home;