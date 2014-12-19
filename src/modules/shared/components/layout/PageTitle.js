var React = require('react');

var PageTitle = React.createClass({
  render: function() {
    var title = this.props.title;
    var subTitle = this.props.subTitle || '';
    return (
      <div className="page-title">
        <h2 className="ui header">
         {title}
          <div className="sub header">{subTitle}</div>
        </h2>
      </div>
    )
  }
});

module.exports = PageTitle;
