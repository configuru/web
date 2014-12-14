
var React = require('react'),
    Router = require('react-router'),
    Fluxy = require('fluxy'),
    routes = require('./router/routes');

Fluxy.bootstrap('__fluxy__');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});