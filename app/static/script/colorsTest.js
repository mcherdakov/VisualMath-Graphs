var plot = new Plotter("plot");

plot.addPoint(1, 1, {
  color: 17
});


var l = plot.addLine(1, 1, 2, 1);
l.Colour(5);
plot.addFunc(function (x) {
  return -1;
}, {
  color: 10
});
plot.addArea([
  {
    x: 0,
    y: 0
  },
  {
    x: 1,
    y: 0
  },
  {
    x: 0.5,
    y: 1
  }
]);
