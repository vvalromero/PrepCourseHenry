// FUNCION CONSTRUCTORA

//1. DECLARAR PROPIEDADES

//function Auto (puertas, color, marca , año , ruedas) {
   // this.puertas = puertas;
    ////this.marca = marca ;
    //this.año = año ;
   // this.ruedas = ruedas}
//var miPrimerAuto = new Auto(2, "Rojo", 'Ferrari' , '2018' , 4)

//console.log(miPrimerAuto)
//console.log(miPrimerAuto.marca)

//2. AGREGAR METODOS

//function Auto (puertas, color, marca , año , ruedas) {
  //  this.puertas = puertas;
    //this.color = color ;
//    this.marca = marca ;
 //   this.año = año ;
   // this.ruedas = ruedas

 //   this.informacion = function() {
   //     console.log('Este es un ' +this.marca +' de color ' +this.color)}}
//var miPrimerAuto = new Auto
//(2, "Rojo", 'Ferrari' , '2018' , 4)

//miPrimerAuto.informacion()

//EXPRESION DE CLASE
//1. DECLARAR PROPIEDADES

// class Auto {
// constructor(puertas, color, marca ,año, ruedas) {
//       this.color = color ;
//    this.marca = marca ;
//    this.año =año;
//     this.ruedas = ruedas;
// }
// }
// var miSegundoAuto = new Auto(4 , 'Blanco' , 'Fiat' , 2015 , 4)
// //console.log(miSegundoAuto);
// console.log(miSegundoAuto.marca)

//2. AGREGAR METODOS

// class Auto {
//     constructor(puertas, color, marca ,año, ruedas) {
//         this.puertas = puertas;
//         this.color = color ;
//         this.marca = marca ;
//         this.año =año;
//         this.ruedas = ruedas;
//     }
//     informacion() {
//         console.log('Esto es un '+this.marca +' de color ' +this.color);
//     }
//     }
//     var miSegundoAuto = new Auto(4 , 'Blanco' , 'Fiat' , 2015 , 4)
//     miSegundoAuto.informacion()

// THIS
// class Futbol{
//     constructor(jugador) {
//         this.jugador =jugador
//     }
//     objetenerNombre(){
//         console.log(this.jugador);

//     }
// }
// let argentina = new Futbol('Messi')
// var brasil = new Futbol('Pele')

// argentina.objetenerNombre()
// brasil.objetenerNombre()