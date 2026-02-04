let i=1;
while (i<=3){
    console.log("while:", i);
    i++; //i=i+1
}
/*let entrada="";
while(entrada !=="salir"){
    entrada=prompt("Escribe algo");   
}

console.log("saliste");*/

//Arrays

let frutas =["manzana","pera","uva", "fresa", "mamey"];//posicion 0,1,2
console.log(frutas[0]);//manzana
console.log(frutas[1]);//pera
console.log(frutas[2]);//uva

console.log(frutas.length);//5 nos enumera 

for(let indice =0; indice<frutas.length; indice++){
    console.log("frutas:", frutas[indice]);
}