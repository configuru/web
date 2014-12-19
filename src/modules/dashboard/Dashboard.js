var React = require('react'),
  { RouteHandler } = require('react-router'),
  Line = require('../shared/components/charts/Line');


var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <div className="ui three column grid">
          <div className="column">
            <h2 className="ui teal header">
              <i className="tasks icon"></i>
              <div className="content">
              Facts
                <div className="sub header">some facts.</div>
              </div>
            </h2>
            <div className="ui statistics">
              <div className="statistic">
                <div className="value">
                12
                </div>
                <div className="label">
                <a href="#">Active spaces</a>
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                31
                </div>
                <div className="label">
                  <a href="#">Configurations</a>
                </div>
              </div>
              <div className="statistic">
                <div className="value">
                67%
                </div>
                <div className="label">
                  <a href="#">Plan used</a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <h2 className="ui teal header">
              <i className="cloud icon"></i>
              <div className="content">
              Your spaces
                <div className="sub header">recently created spaces.</div>
              </div>
            </h2>
            <div className="ui divided list">
              <div className="item">
                <i className="teal circle icon"></i>
                <div className="content">
                  <a className="header">AWS 1</a>
                  <div className="description">amazon jenkins build server.</div>
                </div>
              </div>
              <div className="item">
                <i className="pink circle icon"></i>
                <div className="content">
                  <a className="header">Heroku testing server UI</a>
                  <div className="description">
                    heroku server for testing new features.
                  </div>
                </div>

              </div>
              <div className="item">
                <i className="teal circle icon"></i>
                <div className="content">
                  <a className="header">Prod 62 US</a>
                  <div className="description">main production server US data center.</div>
                </div>
              </div>
              <div className="item">
                <i className="teal circle icon"></i>
                <div className="content">
                  <a className="header">Prod 72 EU</a>
                  <div className="description">main production server EU data center.</div>
                </div>
              </div>
              <div className="item">
                <i className="pink circle icon"></i>
                <div className="content">
                  <a className="header">112</a>
                  <div className="description">local RnD dev server.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <h2 className="ui teal header">
              <i className="database icon"></i>
              <div className="content">
              Stats
                <div className="sub header">server payload</div>
              </div>
            </h2>
            <Line />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
