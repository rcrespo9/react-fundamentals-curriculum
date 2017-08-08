var React = require('react');
var Form = require('./Form');

class Header extends React.Component {
  render() {
    return (
      <header className='page-header'>
        <h1>Clever Title</h1>
        <Form alignment='horizontal' />
      </header>
    )
  }
}

module.exports = Header;