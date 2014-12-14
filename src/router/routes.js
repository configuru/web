var React = require('react'),
  { Route, DefaultRoute } = require('react-router'),
  App = require('../App'),
  Dashboard = require('../modules/dashboard/Dashboard'),
  Settings = require('../modules/settings/Settings');

module.exports = (
  <Route name='home' path='/' handler={App}>
    <Route name='dashboard' path='/dashboard' handler={Dashboard} />
    <Route name='settings' path='/settings' handler={Settings} />
  </Route>
);