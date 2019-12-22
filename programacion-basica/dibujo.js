var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");

boton.addEventListener("click", dibujo_por_click);

var d = document.getElementById("dibujito");
var ancho = d.width;
//alert(ancho);
var lienzo = d.getContext("2d");
//console.log(lienzo);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujo_por_click() {

    var xxx = parseInt(texto.value);

    var lineas = xxx;
    var l = 0;
    var yi, xf;
    var colorcito = "magenta";
    var espacio = ancho / lineas;

    while(l < lineas) {
        yi = espacio * l;
        xf = espacio * (l + 0.25);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        dibujarLinea(colorcito, 300, xf, yi, 0);
        console.log('Linea' + l);
        l = l + 0.25;
    }

    dibujarLinea(colorcito, 0.25, 0.25, 0.25, 299); 
    dibujarLinea(colorcito, 0.25, 299, 299, 299);

    dibujarLinea(colorcito, 299, 0.25, 0.25, 0.25); 
    dibujarLinea(colorcito, 299, 299, 299, 0.25);
    
}