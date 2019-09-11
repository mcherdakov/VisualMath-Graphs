var container = new PlotContainer("plot");

var plotter = container.addPlot(/*{
 left: 1,
 right: 2
 }*/);

//plotter.draw();

var func = plotter.addFunc(function (x) {
  return Math.sin(x) / x;
}, {
  breaks: [0]
});

var point = plotter.addPoint(3, 3);

console.log(func.Accuracy());
console.log(func.Accuracy(10));
console.log(func.Accuracy());

setTimeout(function () {
  plotter.remove(func);

  func = plotter.addFunc(function (x) {
    return Math.sin(x);
  });

  plotter.remove(point);
}, 2000);