let notas = [];
function estudiante(nombre, edad, curso, notas){
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.notas = notas;
    (this.añadirNota = function (nota){
        let nuevaNota = nota; 
        notas.push(nuevaNota); 
        console.log(notas); 
    }),
    (this.mostrarInformacion = function (){
        console.log (this.nombre, this.edad, this.curso, this.notas);
    }),
    (this.promedio = function(){
        let suma = 0;
        for(nota of notas){
            suma+=nota;
        }
        let promedio = suma/notas.lenght;
        console.log(promedio);
    })
}
let estudiante1 = new estudiante("Valentina", 16, "Terza Liceo", []);
let estudiante2 = new estudiante("Camila", 17, "Terza Liceo", []);
let estudiante3 = new estudiante("Mariana", 15, "Terza Liceo", []);
function carro(marca, modelo, año, kilometraje, kpg){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.kilometraje = kilometraje;
    this.kpg = kpg;
    (this.añadirRecorrido = function(recorrido){
        kilometraje= kilometraje + recorrido;
        console.log(kilometraje);
    }),
    (this.calcularConsumo = function(kilometros){
        let consumo = 0;
        consumo= kilometros/kpg;
        console.log(consumo);
    }),
    (this.mostrarInformacion = function (){
        console.log (this.marca, this.modelo, this.año, this.kilometraje, this.kpg);
    })
}
let carro1 = new carro("Chevrolet", "Tracker", 2017, 5000, 27);
let carro2 = new carro("Ford", "EcoSport", 2020, 0, 50);
let carro3 = new carro("Audi", "A4", 2018, 10700, 42);