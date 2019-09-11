(function () {
  var plot = new Plotter('plot');

  var func = plot.addFunc(function (x) {
    return Math.sin(x);
  }, {
    breaks: [0]
  });

  func
    .moveTo(function (x) {
      return 1 / x;
    }, {
      delay: 2000,
      duration: 2000
    });
}());