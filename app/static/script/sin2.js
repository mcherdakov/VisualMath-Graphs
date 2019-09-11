(function () {

  var c = new PlotContainer('plot');
  var control = c.addEmptyDiv().attr('id');

  var plot = c.addPlot({
    left: -0.21,
    right: 0.21,
    top: 0.14,
    bottom: -0.14
  });

  var sin = function (pow) {
    return function (x) {
      return Math.pow(x, pow) * Math.sin(1 / x);
    };
  };

  var leftSeparator = -0.02;
  var rightSeparator = -leftSeparator;

  var leftFunc = plot.func(sin(1), {
    right: leftSeparator,
    strokeWidth: 1
  });
  var rightFunc = plot.func(sin(1), {
    left: rightSeparator,
    strokeWidth: 1
  });
  var middleFunc = plot.func(sin(1), {
    left: leftSeparator,
    right: rightSeparator,
    accuracy: 3000
  });

  control = new app.Controls(control);

  var range = control.addRange(function (value) {
    leftFunc.moveTo(sin(value), {
      duration: 500
    });
    rightFunc.moveTo(sin(value), {
      duration: 500
    });
    middleFunc.moveTo(sin(value), {
      duration: 500
    });

    range.setText("$x^" + value + "*\\sin(\\frac{1}{x})$");
    //var jax = MathJax.Hub.Queue(["Typeset", MathJax.Hub, range]);
  }, "$x^1*\\sin(\\frac{1}{x})$", 0, 10, 1, 1);
}());