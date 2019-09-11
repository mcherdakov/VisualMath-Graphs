var s = new Skeleton('plot');

//демонстрирует, что скелетон крутой
function go() {
  var now = new Date();
  for(var i = 0; i < 1000; i++) {
    s.addPoint(i, 0);
  }
  return new Date() - now;
}

//А этот код для демонстрации того, что скелетон круче jsx. В десять раз.
//хыхы.
//function g(){var n = new Date();for(var i=0;i<1000;i++){brd.create('point',[i,0]);}return new Date()-n;}g();