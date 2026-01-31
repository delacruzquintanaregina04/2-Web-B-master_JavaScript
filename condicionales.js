let edad = 20;
let tieneINE = true;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
let calificacion = 9;
if(calificacion >= 9){
  console.log("eres inteligente");
} else if(calificacion >= 6){
  console.log("eres promedio");
} else {
  console.log("necesitas estudiar mas");
}

// AND (y) && 
// OR(o)||
// NOT (no) !
if (edad >= 18 && tieneINE) {
  console.log("Puedes votar");
}else {
  console.log("No puedes votar");
}