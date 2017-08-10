var React = require('react');

class Detail extends React.Component {
  render() {
    console.log(this.props.location.state);
    return (
      <div>Detail!</div>
    )
  }
}

module.exports = Detail;