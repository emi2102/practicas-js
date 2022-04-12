// Arrow_function

// Una funcion expresada es cuando a una variable le asiganmos una funcion anonima:
// const saludo=function(){
//     console.log("hola");
// }

// saludo();
// ------------------------------------

// Ahora, un arroww function es lo siguiente, se le quita la palabra function y se le pone  => entre las llaves y el parentesis:
// const saludo=()=>{
//     console.log("hola");
// }

// saludo();
// ------------------------------------------
// Si la funcion, tiene una linea, se quitan las llaves y seria:
// const saludo=()=> console.log("hola");

// saludo();
// Con parametros seria:
// const saludo=(nombre)=> console.log(`hola ${nombre}`);
// saludo("IRMA");

// No es necesario los parentesis cuando se usa UN parametros
const saludo=nombre=> console.log(`hola ${nombre}`);
saludo("IRMA");

// -----------------------------------------------------------------------------------------------------
// Los arrow function permiten hacer return implicito, por lo tanto, EVITAN HACER LO SIGUIENYE
// const sumar=function(a,b){
//     return a+b;
// }
// console.log(sumar(9,1));

// CON ARROW FUNCTION QUEDARIA: (PERMITIENDO HACER RETURN IMPLICITO)
// const sumar=(a,b)=>a+b;
// console.log(sumar(9,1));//retorna la suma de una vez, sin poner return

// // -----------------------------------------------------------
// // FUNCION DE VARIAS LINEAS
// const functionDeVariasVariables=()=>{
//     console.log("UNO");
//     console.log("UNO");
//     console.log("UNO");
//     console.log("UNO");
// }///AJURO LLEVA LAS LLAVES CUANDO SON MAS DE 1 LINEA

 const numeros=[1,2,3,4]

numeros.forEach(function(el,index){
console.log(`El elemento ${el} esta en la posicion ${index}`);
})