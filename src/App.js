
var React = require('react'),
  { RouteHandler, Link } = require('react-router');


var App = React.createClass({
  render: function() {
    return (
      <div>
      <nav className="navigation container">
        <h1>Configuru</h1>
        <div className="ui right horizontal list">

            <div className="item">
              <Link to="dashboard"><i className="circular teal settings icon"></i></Link>
              </div>
              <div className="item">
                <Link to="settings"><i className="circular teal cloud  icon"></i></Link>
                </div>
              </div>


        </nav>
        <div className="container">
          <RouteHandler />
        </div>
        </div>
    );
  }
});

module.exports = App;
