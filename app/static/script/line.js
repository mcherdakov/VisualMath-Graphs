var plotter = new Plotter("plot", {
  left: -5,
  right: 5
});

plotter.draw();

var line = plotter.addLine(0, 0, 1, 1);