var React = require('react');
var ChartistGraph = require('react-chartist');

var Line = React.createClass({
  render: function() {

    var type = 'Line';
    var data = {
      // A labels array that can contain any sort of values
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
        [50, 20, 40, 25, 90, 87, 45]
      ]
    };

    return (
      <div>
        <ChartistGraph data={data} type={type} />
      </div>
    )
  }
});

module.exports = Line;