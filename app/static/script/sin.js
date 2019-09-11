(function () {
  var plotter = new Plotter("plot", {
    left: -0.4,
    right: 0.4,
    top: 1.2,
    bottom: -1.2
  });

  var style = {
    strokeWidth: 1
  };

  var leftSeparator = 0.2;
  var rightSeparator = -0.2;

  var sin = function (x) {
    return Math.sin(1 / x);
  };

  plotter.addFunc(sin, _.extend(_.clone(style), {
    right: rightSeparator
  }));

  plotter.addFunc(sin, _.extend(_.clone(style), {
    left: leftSeparator
  }));

  plotter.addFunc(sin, _.extend(_.clone(style), {
    left: rightSeparator,
    right: leftSeparator,
    accuracy: 5000,
    breaks: [0]
  }));
}());