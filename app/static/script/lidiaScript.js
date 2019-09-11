var plotter = new Plotter("plot", {
  left: 0,
  right: 1,
  bottom: 0,
  top: 2
});
plotter.draw();

var array = [0, 1];
var ArrSize = 2;
var y = 0;
var step = 0;
var s = 1;
var point;
var line = plotter.addLine(0, y, 1, y, {strokeWidth: 4, color: 0});
var i;

var steps = setInterval(function () {
  step = step + 1;

  if (step > 8) {
    clearInterval(steps);
  }

  y = y + 1 / 8;
  s = s / 3;
  for (i = 0; i < ArrSize; i++) {
    if (i % 2 == 0) {
      array.push((array[i] + s * 2), ( array[i] + s));
      point = plotter.addPoint(array[i], 0, {size: 0, movable: false});
    }

  }

  ArrSize = array.length;
  //alert();
  //сортирую массив, чтобы точки были упорядоченными
  array.sort(function (a, b) {
    return a - b;
  });
  //для каждой нечетной точки строю обдасти, которые нужно будет удалить

  for (i = 0; i < ArrSize - 1; i++) {
    if (i % 2 == 0) {
      plotter.addLine(array[i], y, array[i + 1], y, {strokeWidth: 4, color: 0});
    }
  }
}, 1000);