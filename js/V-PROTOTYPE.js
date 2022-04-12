
// Creamos un objeto llamado animal
// const animal={
//     nombre:"Snoopy",
//     sonar(){
//         console.log('Hago sonidos porque estoy vivo');
//     }
// }
// // Si quisiera crear otro animal con otro nombre, seria:
// const animal2={
//     nombre:"Lola Bunnny",
//     sonar(){
//         console.log('Hago sonidos porque estoy vivo');
//     }
// }

// console.log(animal);
// console.log(animal2);

// Funcion constructora, para que apartir de ella se puedan crear distntas instancias, para no copiar dos veces  un objeto para cambiar una sola carcteristia

// function Animal (nombre, genero) {
//         // Atributos
//         this.nombre = nombre;
//         this.genero = genero;
//         this.sonar=function(){
//             console.log('Hago sonidos porque estoy vivo');
//         };
// }

// FUNCION CONSTRUCTORA DONDE ASIGNAMOS LOS METODOS AL PROTOTIPO
function Animal (nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
}

// Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar=function(){
    console.log('Hago sonidos porque estoy vivo');
};

const snoppy=new Animal("snoppy","macho");
const lolaBuny=new Animal("Lola bunny", "Hembra");
console.log(snoppy);
console.log(lolaBuny);

snoppy.sonar();