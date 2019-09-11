var p = new Plotter('plot');

var func = p.addFunc(Math.sin, {
  left: -1
});

var model = func.getModel();

p.removeAll();

model.left = -3;
model.right = 1;
model.func = Math.cos;
p.addFunc(model);

p.removeAll();

func = p.addFunc(Math.sin);
model = func.getModel();
model = _.cloneDeep(model);
model.func = Math.cos;
func.setModel(model);
