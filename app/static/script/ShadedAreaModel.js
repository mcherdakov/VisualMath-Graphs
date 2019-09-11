var p = new Plotter('plot');

var shadedArea = p.addShadedArea(Math.sin, {
  left: -1
});

var model = shadedArea.getModel();

setTimeout(function () {
  p.removeAll();
  model.left = -3;
  model.right = 1;
  model.func = Math.cos;
  shadedArea = p.addShadedArea(model);
}, 2000);
