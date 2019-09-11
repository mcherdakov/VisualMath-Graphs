var plotter = new Plotter("plot");
plotter.draw();

var signum = function (x) {
  if (x < 0) {
    return -1;
  } else {
    return 1;
  }
};

var options = {
  breaks: [0]
};

var f = plotter.addFunc(signum, options);