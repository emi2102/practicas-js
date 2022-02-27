// objeto

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

// Forma anterior de hacerlo
 const precioProducto=producto.precio;
//  const nombreProducto=producto.nombreProducto;

 console.log(precioProducto);
//  console.log(nombreProducto);

//  Destructuring (actual)
// Se encarga de extraer el valor de precio y crea una variable automaticamente llamada precio
const {precio}=producto;
const {nombreProducto}=producto;
// O se puede hacer asi: const {precio, nombreProducto}=producto;
console.log(precio);
console.log(nombreProducto);