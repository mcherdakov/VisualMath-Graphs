(function () {

  var c = new PlotContainer('plot');
  var controls = new app.Controls(c.addEmptyDiv().attr('id'));

  var n = 1;

  controls.addRange(function (value) {
    n = value;
    text.setText("Номер члена последовательности: " + value);
    func.update();
  }, "", 1, 10000, 1, 1);

  //10000 и 250.
  //В прошлой программе было 250.

  var text = controls.addText("Номер члена последовательности: 1");

  var p = c.addPlot({
    left: 0,
    right: 1.01,
    top: 0.3,
    bottom: -0.01
  });

  var func = p.addFunc(function (x) {
    //return Math.pow(x, n) - Math.pow(x, n + 1);
    return Math.pow(x, n) - Math.pow(x, 2*n);
  }, {
    left: 0,
    right: 1,
    accuracy: 4000
  });
}());