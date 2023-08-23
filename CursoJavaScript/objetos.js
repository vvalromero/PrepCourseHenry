//var deportes = {
  //  conBalon: ["Futbol", "Basket", "Rugby"],
 //   sinBalon: ["Boxeo", "Natacion", "Surf"]
//};

//var persona = {
   // nombre: "Lucas",
    //edad: 26,
    //estudios: { esProgramador: true } };
//console.log(persona.edad)

//persona.nombre = "Martin"
// console.log(persona.nombre)

//var autos = {};
//autos.marcas = ["Ford", "Audi",'Ferrari'];
//delete autos.marcas
//console.log(autos)

//var misFunciones = {
///    saludar:function () {
    //    console.log ('Hola');
  //  }
//}

//misFunciones.saludar()


//var libro = {
  //  autor: 'Borges',
    //// año: 1990
//}
//var tienePropiedad = libro.hasOwnProperty ('autor');
//console.log(tienePropiedad)

//var todasLasPropiedades = Object.keys(libro);
//console.log(todasLasPropiedades)


//var mundo = {continentes: 7, paises: 195, oceanos: 5 }
//for (var prop in mundo) {
   // console.log ("Esta es la propiedad:" + prop);
   // console.log("Este es el valor: " + mundo [prop])
//}


var mascota = {
    animal: "Perro", 
    raza: "Ovejero Aleman", 
    amistoso: true, 
    dueña: "Maria Lopez",
    info: function() {
        console.log("Mi perro es un " + this.raza)
    }
} 
mascota.info()