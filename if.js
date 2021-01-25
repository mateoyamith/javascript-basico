if (false) {
    console.log("Hola");
} else if (false) {
    console.log("Soy un false");
} else {
    console.log("Soy el segundo false");
}


var edad = 18;

if (edad == 18) {
    console.log("Puedes votar, será tu 1ra votación");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy un uno";

/* Reto de piedra papel o tijera*/


function validacionPelea(usr, cpu) {
    if (usr == cpu) {
        return console.log("Es un empate");
    }

    if ((usr == "piedra" && cpu == "papel") || (usr == "papel" && cpu == "piedra")) {
        return console.log("Gana papel");
    }

    if ((usr == "tijera" && cpu == "papel") || (usr == "papel" && cpu == "tijera")) {
        return console.log("Gana tijera");
    }

    if ((usr == "tijera" && cpu == "piedra") || (usr == "piedra" && cpu == "tijera")) {
        return console.log("Gana piedra");
    }
}