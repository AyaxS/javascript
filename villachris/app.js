var vc = document.getElementById('villachris');
var papel = vc.getContext("2d");
var mapa = "img/tile.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener('load', dibujarFondo);

var vaca = new Image();
vaca.src = "img/vaca.png";
vaca.addEventListener('load', dibujarVaca);

var cerdo = new Image();
cerdo.src = "img/cerdo.png";
cerdo.addEventListener('load', dibujarCerdo);

var pollo = new Image();
pollo.src = "img/pollo.png";
pollo.addEventListener('load', dibujarPollo);

function dibujarFondo() {
    papel.drawImage(fondo,0,0);
}

function dibujarVaca() {
    papel.drawImage(vaca,400,10);
}

function dibujarCerdo() {
    papel.drawImage(cerdo,50,200);
}

function dibujarPollo() {
    papel.drawImage(pollo,200,300);
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}