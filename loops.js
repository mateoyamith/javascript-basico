var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

for (let index = 0; index < estudiantes.length; index++) {
    saludarEstudiantes(estudiantes[index]);
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

/*Loop while*/
while (estudiante.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}