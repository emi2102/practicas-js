// This

const reservacion={
    nombre: 'Emilmar',
    apellido: 'Cuarez',
    total: 400,
    pagado:false,
    informacion:function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

console.log(reservacion.nombre);