var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2021,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

/*Funcion constructora*/
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2021);
var autoNuevo2 = new auto("Mazda", "CR-X", 2021);
var autoNuevo3 = new auto("Chevrolet", "Onix", 2021);