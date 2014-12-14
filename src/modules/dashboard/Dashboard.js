var React = require('react'),
  { RouteHandler } = require('react-router');


var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <h2>APP DASHBOARD</h2>

        <RouteHandler />
      </div>
    );
  }
});

module.exports = Dashboard;
