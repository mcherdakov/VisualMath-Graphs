var plot = new Plotter('plot');

var arr = [];
var iterations = 360;
for (var i = 0; i < iterations; i += 1) {
  var x = i * 2 * Math.PI / iterations;
  arr.push({
    x: Math.cos(x),
    y: Math.sin(x)
  });
}

plot.addParametricFunc(arr);