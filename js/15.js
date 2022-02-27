// Array methods
const meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// Foreach
meses.forEach(function(mes){
    if(mes=='Marzo'){
        console.log('marzo si existe');
    }
});

// Includes NO SE USA CON OBJETOS
let resultado=meses.includes('Marzo');

// Some ideal para arreglos de objetos
resultado=carrito.some(function(producto){
    return producto.nombre==='celular';
});

// Reduce. esto sirve para sumar todos los precios del carrito
resultado=carrito.reduce(function(total, producto){
    return total+producto.precio;
}, 0);//esto dice que empieza en 0


// Filter.

resultado=carrito.filter(function(producto){//retorna los objetos que tienen precio menor a 400
    return producto.precio<400
});

resultado=carrito.filter(function(producto){//retorna los objetos que tienen nombre "celular"
    return producto.nombre==='celular'
});


console.log(resultado);