var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Lapto", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
]

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
});

var articulosMapeados = articulos.map(function(arti) {
    return arti.nombre;
});

var articulosFind = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop";
});

articulos.forEach(function(articu) {
    console.log(articu.nombre);
});

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});