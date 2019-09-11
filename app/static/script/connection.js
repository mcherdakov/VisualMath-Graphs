var s = new Skeleton('plot');

var points = [
  s.addPoint(0, 0, {
    onMove: function () {
      s.update();
    }
  })
];