var p = new Plotter('plot');

var line = p.addLine(0, 0, 1, 1, {
  color: 7
});

var model = line.getModel();

p.removeAll();

model.color = '#000000';
p.addLine(model);