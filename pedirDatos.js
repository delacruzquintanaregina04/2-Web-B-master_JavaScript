//console.log("Hola me llamo regina");

//console.log("Como te llamas?");

//let nombreUsuario = prompt("Por favor ingresa tu nombre:");
//console.log(nombreUsuario);
//document.write(nombreUsuario);
//alert(nombreUsuario);

//let fecha = prompt("Cuando es nu cumpleaños?");
//console.log(fecha);
//alert(fecha);
//PREGUNTAR CUANTOS PERROS TIENES

let perros = prompt("Cuantos perros tienes?");
perros = parseInt(perros); //Convertir el valor ingresado a un número entero
//PREGUNTAE CUANTOS GATOS TIENES
let gatos = prompt("Cuantos gatos tienes?");
gatos = parseInt(gatos); //Convertir el valor ingresado a un número entero
//MOSTRAR COMO RESPUESTA : Tienes en total x mascotas
let totalMascotas = perros + gatos;
console.log("En total tienes " + totalMascotas + " mascotas");

