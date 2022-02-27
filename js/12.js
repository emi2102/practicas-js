// objeto

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

Object.freeze(producto); //sirve para congelar el objeto, no se puede agregar mas nada al obj
// Object.seal(producto); //sirve para congelar el objeto, no se puede agregar mas nada al obj pero si permite modificar
producto.image='imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);