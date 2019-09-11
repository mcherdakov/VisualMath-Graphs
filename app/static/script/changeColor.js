var plotter = new Plotter("plot");

var line = plotter.addLine(0, 0, 1, 1, {
  color: 7
});

var line2 = plotter.addLine(0, 1, 1, 0);
line2.setColor(9);

line2 = plotter.addLine(0, 0.5, 1, 1);
line2.Color(17);
