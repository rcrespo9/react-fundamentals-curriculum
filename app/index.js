var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class HelloWorld extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    ) 
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);