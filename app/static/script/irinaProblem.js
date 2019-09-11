/*
 var net = new Plotter("plot");

 var b;
 var a = b = 1;
 var options = {
 left: -1,
 right: 1
 };
 var rowtop = net.addFunc( function(x) {
 return Math.sqrt((1-Math.pow(x,2)/Math.pow(a,2))*Math.pow(b,2))
 }, options );

 rowtop.setColor(7);

 var point = net.addPoint(1, 1);
 point.Color(8);
 point.Size("tiny");*/

var c = new PlotContainer("plot");
c.addPlot({
  height: 400,
  width: 400
});

c.addPlot({
  height: 400,
  width: 400
});
