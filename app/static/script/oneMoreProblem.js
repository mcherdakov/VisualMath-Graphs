var P2 = new Plotter('plot', {
  left: -4, right: 4, top: 6, bottom: -6, height: 350, width: 500, zoom: false
});

var g1, g2, g3, g4, g5;
function createFunctions() {
  g1 = P2.addFunc(function (x) {
    return 5 * x - Math.pow(x, 3) / 3;
  }, {left: -4, right: -2, top: 6, bottom: -6, strokeWidth: 2});

  g2 = P2.addFunc(function (x) {
    return x;
  }, {left: -2, right: -1, top: 6, bottom: -6, strokeWidth: 2, color: 2});

  g3 = P2.addFunc(function (x) {
    return Math.pow(x, 3) / 3;
  }, {left: -1, right: 1, top: 6, bottom: -6, strokeWidth: 2, color: 4});

  g4 = P2.addFunc(function (x) {
    return x;
  }, {left: 1, right: 2, top: 6, bottom: -6, strokeWidth: 2, color: 2});

  g5 = P2.addFunc(function (x) {
    return 5 * x - Math.pow(x, 3) / 3;
  }, {left: 2, right: 4, top: 6, bottom: -6, strokeWidth: 2});

}

var maxRepeats = Number.POSITIVE_INFINITY;
var count = 0;
if (maxRepeats > 0) {
  var repeat = setInterval(function animate() {

    P2.removeAll();
    createFunctions();

    g1
      .moveTo(function (x) {
        return 5 * x - Math.pow(x, 3) / 3 + 6;
      },
      {
        delay: 2000,
        duration: 2000
      });

    g2
      .moveTo(function (x) {
        return x + 2 / 3;
      },
      {
        delay: 2000,
        duration: 2000
      });

    g3
      .moveTo(function (x) {
        return Math.pow(x, 3) / 3;
      },
      {
        delay: 2000,
        duration: 2000
      });

    g4
      .moveTo(function (x) {
        return x - 2 / 3;
      },
      {
        delay: 2000,
        duration: 2000
      });

    g5
      .moveTo(function (x) {
        return 5 * x - Math.pow(x, 3) / 3 - 6;
      },
      {
        delay: 2000,
        duration: 2000
      });

    if (++count === maxRepeats) {
      clearInterval(repeat);
    }

    if (maxRepeats > 1 && count === 1) {
      clearInterval(repeat);
      repeat = setInterval(animate, 6000);
    }
  }, 0);
} else {
  createFunctions();
}
