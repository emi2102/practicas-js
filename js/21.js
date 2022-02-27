// Arrow Function
const sumar2=(n1,n2)=> console.log(n1+n2);

sumar2(5,10);

const aprendiendo=tecnologia=> console.log(`Aprendiendo ${tecnologia}`)

aprendiendo("javascript");

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
meses.forEach(mes =>{
    if(mes=='Marzo'){
        console.log('marzo si existe');
    }
});


// Some ideal para arreglos de objetos
let resultado=carrito.some(producto=> producto.nombre==='celular');

// Reduce. esto sirve para sumar todos los precios del carrito
resultado=carrito.reduce((total, producto) => total+producto.precio, 0);//esto dice que empieza en 0


// Filter.

resultado=carrito.filter(producto=>producto.precio<400);

resultado=carrito.filter(producto =>producto.nombre==='celular');


console.log(resultado);