var plot = new Plotter('plot', {
  onDrawCallback: function (plot) {
    console.log('left: ' + plot.getLeft(), 'right: ' + plot.getRight());
  }
});