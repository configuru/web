var React = require('react');
var ChartistGraph = require('react-chartist');

var Pie = React.createClass({
  render: function() {

    var type = 'Pie'
    var data = {
      series: [20, 10, 30, 40]
    }

    return (
      <div>
        <ChartistGraph data={data} type={type} />
      </div>
    )
  }
});

module.exports = Pie;
