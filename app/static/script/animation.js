(function () {
  var plot = new Plotter('plot', {
    left: -5,
    right: 5,
    width: 600,
    height: 600
  });

  var func = plot.func(Math.sin, {
    breaks: [0],
    left: -1,
    right: 1
  });

  var func2 = plot.func(Math.sin, {
    breaks: [0],
    left: -1,
    right: 1
  });

  var duration = 2500;
  var delay = 2500;

  func.moveTo(function (x) {
    return x > 0 ? +1 : -1;
  }, {
    delay: delay,
    duration: duration
  });

  func2.moveTo(function (x) {
    return x > 0 ? +1 : -1;
  }, {
    delay: delay,
    duration: duration
  });

  func.moveTo(function (x) {
    return x * x;
  }, {
    delay: delay * 2,
    duration: duration
  });

  func2.moveTo(function (x) {
    return x * x;
  }, {
    delay: delay * 2,
    duration: duration
  });


  func.moveTo(function (x) {
    return x * x * x;
  }, {
    delay: delay * 3,
    duration: duration
  });

  func2.moveTo(function (x) {
    return x * x * x;
  }, {
    delay: delay * 3,
    duration: duration
  });

  func.moveTo(function (x) {
    return x;
  }, {
    delay: delay * 4,
    duration: duration
  });

  func2.moveTo(function (x) {
    return x;
  }, {
    delay: delay * 4,
    duration: duration
  });

  func.moveTo(function (x) {
    return Math.sqrt(1 - x * x);
  }, {
    delay: delay * 5,
    duration: duration
  });

  func2.moveTo(function (x) {
    return -Math.sqrt(1 - x * x);
  }, {
    delay: delay * 5,
    duration: duration
  });

}());