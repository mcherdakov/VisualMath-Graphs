var plot = new Plotter('plot');

var point = plot.addPoint(1, 1, {
  onMove: function (x, y) {
    console.log('(' + x + ', ' + y + ')');
   }
});
point.Movable(true);

var but1 = document.getElementById("addButred");
but1.onclick = point_in_red;
var but2 = document.getElementById("addButblack");
but2.onclick = point_in_black;
var but3 = document.getElementById("addButgreen");
but3.onclick = point_in_green;

function point_in_red() {
    point.setColor(6);
}

function point_in_black() {
    point.setColor(20);
}

function point_in_green() {
    point.setColor(4);
}
