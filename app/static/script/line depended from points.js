var skeleton = new Skeleton('plot');

var line = skeleton.addLine(0, 0, 1, 1);

var points = [
  skeleton.addPoint(0, 0, {
    onMove: function (x, y) {
      line.setX1(x);
      line.setY1(y);
      skeleton.update();
    },
    size: 7
  }),
  skeleton.addPoint(1, 1, {
    onMove: function (x, y) {
      line.setX2(x);
      line.setY2(y);
      skeleton.update();
    },
    size: 7
  })
];