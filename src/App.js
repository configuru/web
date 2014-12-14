
var React = require('react'),
  { RouteHandler, Link } = require('react-router');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <h2>APP</h2>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
