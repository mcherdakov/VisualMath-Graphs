var p = new Plotter('plot');

var point = p.addPoint(1, 1, {
  color: 9
});

var model = point.getModel();

p.removeAll();

p.addPoint(model);