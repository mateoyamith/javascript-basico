/*Declarativas*/
function miFuncion() {
    return 3;
}

miFuncion();

/*Expresion*/

//Funcion anonima
var miFuncion2 = function(a, b) {
    return a + b;
}

miFuncion2(1, 2);

var miNombre = "Mateo";

function nombre() {
    var miApellido = "Sanchez";
    console.log(miNombre + " " + miApellido);
}