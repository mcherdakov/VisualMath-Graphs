var p = new Plotter('plot');

var point = function (x, y) {
  return {
    x: x,
    y: y
  };
};

var area = p.addArea([
  point(0, 0),
  point(1, 0),
  point(0.5, 1)
]);

setTimeout(function () {
  var model = _.cloneDeep(area.getModel());
  model.array[2] = point(0.5, 2);
  area.setModel(model);
}, 2000);