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

// ForEach
carrito.forEach(producto=>console.log(producto.nombre));

// map
const arreglo2=carrito.map(producto=>`${producto.nombre}-${producto.precio}`);

console.log(arreglo2);