var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home');
var Header = require('./Header');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

module.exports = App;