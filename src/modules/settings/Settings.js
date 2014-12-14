var React = require('react'),
  { RouteHandler } = require('react-router');


var Settings = React.createClass({
  render: function() {
    return (
      <div>
        <h2>APP SETTINGS</h2>

        <RouteHandler />
      </div>
    );
  }
});

module.exports = Settings;
