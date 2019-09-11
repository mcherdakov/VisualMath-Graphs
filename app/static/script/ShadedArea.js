var plot = new Plotter('plot');

var func = plot.func(function (x) {
  return 1 / (x);
}, {
  breaks: [0]
});

/*var area = plot.shadedArea(function (x) {
 return 1/(x);
 }, {
 breaks: [0],
 left: -1,
 right: 1
 });*/


var shadedArea = plot.shadedArea(function (x) {
  return 1 / x;
}, {
  right: -0.000001,
  left: -2,
  color: 7,
  axe: 'y'
});
