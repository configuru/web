
var React = require('react'),
  { RouteHandler, Link } = require('react-router');

var App = React.createClass({
  render: function() {
    return (
      <div>
      <nav className="navigation container">
        <h1><Link to="home">Configuru</Link></h1>

        <div className="floated right ui horizontal list">
            <div className="item">
              <Link to="spaces"><i className="circular inverted teal cloud icon"></i></Link>
            </div>
            <div className="item">
              <Link to="settings"><i className="circular inverted teal user  icon"></i></Link>
            </div>
          <div className="item">
            <div className="ui label">
            medium.com
            </div>
          </div>
        </div>
        </nav>
        <div className="page-content">
          <RouteHandler />
        </div>
        </div>
    );
  }
});

module.exports = App;
