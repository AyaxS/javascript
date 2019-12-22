var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 39,
    RIGHT: 37
};

document.addEventListener('keyup', dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("magenta", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(e) {
    console.log(e.keyCode);
    var colorcito = "blue";
    var movimiento = 10;
    if (e.keyCode == teclas.UP) {
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        console.log('Vamos pa´ arriba');
    } else if (e.keyCode == teclas.DOWN) {
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
        console.log('Vamos pa´ abajo');
    } else if (e.keyCode == teclas.LEFT) {
        console.log('Vamos pa´ la derecha');
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
    } else if (e.keyCode == teclas.RIGHT) {
        console.log('Vamos pa´ la izquierda');
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
    } else {
        console.log('Presionaste otra tecla!')
    }
}