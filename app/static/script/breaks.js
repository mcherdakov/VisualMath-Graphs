var plotter = new Plotter("plot");
plotter.draw();
var point = plotter.addPoint(1.5, 1.5, {size: 'large', movable: false});
point.movable = true;


arr = [-0.1, 0.1, 0.2, 0.3, 0.4, 0.5, 1];
breaks = [-3, -2, -1, 0, 1, 2];
var f = plotter.addFunc(function (x) {
  for (var i = 0; i < breaks.length; i++) {
    if (x < breaks[i]) {
      return arr[i]
    }
  }

  return arr[arr.length - 1];

}, {breaks: breaks, left: -4});

plotter.shadedArea(function (x) {
  for (var i = 0; i < breaks.length; i++) {
    if (x < breaks[i]) {
      return arr[i]
    }
  }

  return arr[arr.length - 1];

}, {breaks: breaks, left: -4});

//plotter.remove(f);
//plotter.draw();
//plotter.remove(point);

//point.setSize('tiny');
//point.update();