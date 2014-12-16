var React = require('react'),
  { RouteHandler } = require('react-router');


var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <div className="ui info message">
        Grouping content in a wrapping div is necessary to make sure that content flow does not wrap below the item's image
        </div>
        <div className="ui divided items">
          <div className="item">
            <div className="ui tiny image">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg" />
              </div>
              <div className="middle aligned content">
                <a className="header">12 Years a Slave</a>
                <div className="meta">
                  <span className="cinema">Union Square 14</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ui tiny image">
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/whale/128.jpg" />
                </div>
                <div className="middle aligned content">
                  <a className="header">My Neighbor Totoro</a>
                  <div className="meta">
                    <span className="cinema">IFC Cinema</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ui tiny image">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brandclay/128.jpg" />
                  </div>
                  <div className="middle aligned content">
                    <a className="header">Watchmen</a>
                    <div className="meta">
                      <span className="cinema">IFC</span>
                    </div>
                  </div>
                </div>
              </div>

        <RouteHandler />
      </div>
    );
  }
});

module.exports = Dashboard;
