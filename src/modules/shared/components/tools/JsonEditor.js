var jsoneditor = require('jsoneditor');
var React = require('react');

var JsonEditor = React.createClass({
  propTypes: {
    name     : React.PropTypes.string,
    options  : React.PropTypes.object,
    json     : React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      name: 'foo_bar_baz',
      options : {
        mode: 'tree',
        modes: ['form', 'text', 'tree', 'view'],
        error: function (err) {
          alert(err.toString());
        }
      },
      json    : {}
    };
  },
  componentDidMount: function() {
    var container = this.refs[this.props.name].getDOMNode();
    var editor = new jsoneditor(container, this.props.options, this.props.json);
  },
  render: function() {
    return (
      <div ref={this.props.name}></div>
    );
  }
});

module.exports = JsonEditor;