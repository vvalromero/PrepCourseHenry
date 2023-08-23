// let devuelvoUsuario = function () {
//     return 'Valentina'
// }

// let devuelvoSaludo = function () {
//     return 'Hola'
// }

// var saludar = function (cb1, cb2) {
//     return cb1() + ' ' + cb2();
// }

// var resultado = saludar(devuelvoSaludo, devuelvoUsuario)

// console.log (resultado)

let devuelvoFrase = function (comida) {
    return "Hoy quiero comer: " + comida;
}

let hablar = function (comida, cb) {
    return cb(comida);
}

let fraseFinal = hablar("Pizza", devuelvoFrase) 
console.log (fraseFinal)