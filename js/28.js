// Clases

class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }

    formatearPrecio(){
        return `El producto tiene un precio de ${this.precio}`;
    }
}

const producto2=new Producto('Monitor curvo de 49"',800);
const producto3=new Producto('laptop',500);

// Herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn){
     super(nombre,precio);
        this.isbn=isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y el isbn es ${this.isbn}`;
    }
}

const libro= new Libro('la revolucion', 300,'meidf12');
console.log(libro.formatearProducto());

console.log(producto2);
console.log(producto3);