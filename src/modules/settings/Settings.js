var React = require('react'),
  JsonEditor = require('../shared/components/tools/JsonEditor'),
  AceEditor  = require('../shared/components/tools/AceEditor'),
  { RouteHandler } = require('react-router');


var Settings = React.createClass({
  render: function() {
      var json = {
        "Array": [1, 2, 3],
        "Boolean": true,
        "Null": null,
        "Number": 123,
        "Object": {"a": "b", "c": "d"},
        "String": "Hello World"
      };
    return (
      <div>
        <h2>APP SETTINGS</h2>
        <AceEditor mode="javascript" theme="github" name="blah2" />
        <JsonEditor name="bla" json={json} />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Settings;
