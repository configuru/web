var React = require('react'),
  { Route, DefaultRoute } = require('react-router'),
  App = require('../App'),
  Dashboard = require('../modules/dashboard/Dashboard'),
  Spaces = require('../modules/spaces/Spaces'),
  Settings = require('../modules/settings/Settings');

module.exports = (
  <Route name='home' path='/' handler={App}>
    <DefaultRoute handler={Dashboard} />
    <Route name='spaces' path='/spaces' handler={Spaces} />
    <Route name='settings' path='/settings' handler={Settings} />
  </Route>
);