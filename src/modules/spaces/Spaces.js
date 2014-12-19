var React = require('react'),
  PageTitle = require('../shared/components/layout/PageTitle'),
  { RouteHandler } = require('react-router');


var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <PageTitle title='Spaces' subTitle='group your configurations into logical spaces.' />
        <div className="ui five column grid">
          <div className="column">
            <div className="ui raised segment">
              <div className="ui bottom right attached label">
                settings
                <a className="detail"><i className="settings icon"></i></a>
              </div>
              <div className="ui teal top left attached label">active</div>


              <h3 className="ui header">
                AWS 1
                <div className="sub header">amazon jenkins build server.</div>
              </h3>



              <div className="ui divided selection list">
                <a className="item">
                  <div className="ui circular blue label">12</div>
                  configuration files
                </a>
                <a className="item">
                  <div className="ui circular red label">0</div>
                  errors
                </a>
                <a className="item">
                  <div className="ui circular yellow label">2</div>
                  warnings
                </a>
              </div>

            </div>
            </div>
            <div className="column">
              <div className="ui raised segment">
                <h3 className="ui header">
                  Heroku testing server UI
                  <div className="sub header">heroku server for testing new features.</div>
                </h3>
                <h4 className="ui horizontal header divider">
                  <a><i className="settings icon"></i></a>
                </h4>
                <table className="ui definition table">
                  <tbody>
                    <tr>
                      <td className="two wide column">Files</td>
                      <td>12"</td>
                    </tr>
                    <tr>
                      <td>state</td>
                      <td>
                        <div class="ui checkbox">
                          <input type="checkbox" id="unique-id" />
                          <label for="unique-id">active</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>created</td>
                      <td>03/12/2014</td>
                    </tr>
                    <tr>
                      <td>warnings</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div className="column">
                <div className="ui raised segment">
                  <h3 className="ui header">
                    Prod 62 US
                    <div className="sub header">main production server US data center.</div>
                  </h3>
                  <h4 className="ui horizontal header divider">
                    <i className="teal cloud icon"></i>
                  </h4>
                  <div className="ui divided selection list">
                    <a className="item">
                      <div className="ui circular blue label">12</div>
                      configuration files
                    </a>
                    <a className="item">
                      <div className="ui circular red label">0</div>
                      errors
                    </a>
                    <a className="item">
                      <div className="ui circular yellow label">2</div>
                      warnings
                    </a>
                  </div>
                </div>
                </div>
                <div className="column">
                  <div className="ui raised segment">
                    <h3 className="ui header">
                      Prod 72 EU
                      <div className="sub header">main production server EU data center.</div>
                    </h3>
                    <div className="ui horizontal header divider">
                      <div className="ui icon button">
                        <i className="cloud icon"></i>
                      </div>
                    </div>
                    <table className="ui definition table">
                      <tbody>
                        <tr>
                          <td className="two wide column">Files</td>
                          <td>12"</td>
                        </tr>
                        <tr>
                          <td>state</td>
                          <td>
                            <div class="ui checkbox">
                              <input type="checkbox" id="unique-id" />
                              <label for="unique-id">active</label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>created</td>
                          <td>03/12/2014</td>
                        </tr>
                        <tr>
                          <td>warnings</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  </div>
                  <div className="column">
                    <div className="ui raised segment">
                      <h3 className="ui header">
                        112
                        <div className="sub header">local RnD dev server.</div>
                      </h3>
                      <h4 className="ui horizontal header divider">
                        <i className="teal info circle icon"></i>
                      </h4>
                      <table className="ui definition table">
                        <tbody>
                          <tr>
                            <td className="two wide column">Files</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>state</td>
                            <td>
                              <div class="ui checkbox">
                              <input type="checkbox" id="unique-id" />
                              <label for="unique-id">active</label>
                             </div>
                            </td>
                          </tr>
                          <tr>
                            <td>created</td>
                            <td>03/12/2014</td>
                          </tr>
                          <tr>
                            <td>warnings</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    </div>
        </div>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Dashboard;
