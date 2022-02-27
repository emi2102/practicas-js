// Arreglos o arrays

const numeros=[10,20,30,40,50];
const meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


// Acceder a los valores del arreglo
// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[200]);
// // conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numeros){
//     console.log(numeros);
// })


// const arreglo=["Hola",10,true,"si", null, {nombre: "juan", trabajo: "Programador"},[1,2,3]];

// console.log(arreglo);

numeros.push(70,94,11); //agrega al final del arreglo
numeros.unshift(-1,91,323);//agrega al inicio del arreglo
console.table(numeros);


// meses.pop();//elimina el ultimo elemento del elemento del arreflo
// meses.shift(); //elimina el primer elemento del arreglo

// meses.splice(2,1);

// console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo=[...meses,'junio'];
console.table(nuevoArreglo);