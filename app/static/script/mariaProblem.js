var plot3 = new Plotter('plot');
plot3.draw();

plot3.addFunc(function (x) {
  return x;
}, {left: -0.5, right: 1, breaks: [0]});