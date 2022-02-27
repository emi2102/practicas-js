// POO

// Objetc literal
const producto={
    tablet:'tablet'
}

// Object constructor

function Producto(nombre, precio){
    this.nombre=nombre;
    this.precio=precio;
}

function cliente(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
}

cliente.prototype.formatearCliente = function(){
    return `El Cliente ${this.nombre} tiene un apellido ${this.apellido}`;
}

// Prototype sirve para crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProductor = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2=new Producto('Monitor curvo de 49"',800);
const producto3=new Producto('laptop',500);

const Cliente=new cliente('emilmar', 'cuarez');


console.log(Cliente.formatearCliente());

console.log(producto2.formatearProductor());
console.log(producto3);


