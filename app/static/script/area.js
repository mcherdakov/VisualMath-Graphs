var plotter = new Plotter("plot");

var array = [];
array.push({
  x: 0,
  y: 0
});
array.push({
  x: 1,
  y: 0
});
array.push({
  x: 0.5,
  y: 1
});
array.push({
  x: 0,
  y: 0
});

var area = plotter.addArea(array, {
  strokeWidth: 1
});