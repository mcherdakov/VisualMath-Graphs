(function breaks_simple() {
  var plot = new Plotter('plot');

  plot.addFunc(function (x) {
    return x > 0 ? +1 : -1;
  }, {
    breaks: [0],
    left: -1,
    right: 2
  });
}());