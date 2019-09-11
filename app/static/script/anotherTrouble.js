var sun = new Plotter("plot", {
  left: -10,
  right: 10,
  top: 10,
  bottom: -10,
  height: 500,
  width: 600
});

sun.draw();
var a = 5;

var options = {
  left: -a,
  right: a,
  top: a,
  bottom: -a
};

sun.addPoint(1, 1);
sun.addPoint(2, 2);

setTimeout(function () {
  sun.removeAll();
}, 1000);