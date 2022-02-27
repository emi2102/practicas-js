// FOR LOOP
// for( let i=0;i<10;i++ ){
//     console.log(i);
// }

// for( let i=1;i<=10;i++ ){
//      if(i%2===0){
//         console.log(`El numero ${i} es par`);
//      }else{
//         console.log(`El numero ${i} es impar`);
//      }
// }

const carrito=[
    {nombre: 'Monitor 20 pulgadas', precio:800},
    {nombre: 'Tv 50 pulgadas', precio:700},
    {nombre: 'tablet', precio:300},
    {nombre: 'audifonos', precio:200},
    {nombre: 'celular', precio:500},
    {nombre: 'teclado', precio:160},
    {nombre: 'bocinas', precio:50},
    {nombre: 'laptop', precio:740},
];

for( let i=0;i<carrito.length;i++ ){
  console.log(carrito[i].nombre);
}

// While loop
// let i=0;
// while(i<carrito.length){
//     console.log(carrito[i].nombre);
    
//     i++;
// }

// Do while loop

let i=0;
do{
    console.log(i);
    i++;
}while(i<10);