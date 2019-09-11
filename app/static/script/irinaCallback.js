//может не работать, если подключена версия без контролов

var container = new PlotContainer("plot");
var controls = new app.Controls(container.addEmptyDiv().attr('id'));

var plot = container.addPlot({
  left: -10,
  right: 10,
  top: 100,
  bottom: 0,
  height: 400,
  width: 500
});

var mathFunction = function (x) {
  return Math.pow(x, 2);
};

drawGraph(mathFunction);

function drawGraph(mathematicalFunction) {
  var options = {
    left: -10,
    right: 10,
    top: 100,
    bottom: 0
  };

  var func = plot.addFunc(mathematicalFunction, options);
  var n = 10;
  var a = -10;
  var b = 10;
  var arr = [];
  arr.push({x: a, y: 0});
  arr.push({x: a, y: mathematicalFunction(a)});
  arr.push({x: a + (b - a) / n, y: mathematicalFunction(a)});
  arr.push({x: a + (b - a) / n, y: 0});

  var i;
  for (i = 1; i < n; i++) {
    arr.push({
      x: a + i * (b - a) / n,
      y: mathematicalFunction(a + i * (b - a) / n)
    });
    arr.push({
      x: a + (i + 1) * (b - a) / n,
      y: mathematicalFunction(a + i * (b - a) / n)
    });
    arr.push({x: a + (i + 1) * (b - a) / n, y: 0});
  }
  arr.push({x: b, y: 0});
  var area = plot.addArea(arr, {
    strokeWidth: 2,
    color: 6,
    fillOpacity: 0.7,
    fill: 7
  });


  function changeRange(value) {
    range.setText(text + (value + 10));
    plot.remove(func);
    plot.remove(area);
    var func = plot.addFunc(mathematicalFunction, options);

    var n = 10 + value;
    var arr = [];
    arr.push({x: a, y: 0});
    arr.push({x: a, y: mathematicalFunction(a)});
    arr.push({x: a + (b - a) / n, y: mathematicalFunction(a)});
    arr.push({x: a + (b - a) / n, y: 0});

    for (i = 1; i < n; i++) {
      arr.push({
        x: a + i * (b - a) / n,
        y: mathematicalFunction(a + i * (b - a) / n)
      });
      arr.push({
        x: a + (i + 1) * (b - a) / n,
        y: mathematicalFunction(a + i * (b - a) / n)
      });
      arr.push({x: a + (i + 1) * (b - a) / n, y: 0});
    }
    arr.push({x: b, y: 0});
    var area = plot.addArea(arr, {
      strokeWidth: 2,
      color: 6,
      fillOpacity: 0.7,
      fill: 7
    });

  }

  var text = "n = ";
  var text2 = " ,sum=";
  var range = controls.addRange(changeRange, text + "10", 0, 120, 1, 0);
  range.remove();
  var range = controls.addRange(changeRange, text + "10", 0, 120, 1, 0);
// controls.addButton(function () {
//     }, "hello");
}

//plot.removeAll();