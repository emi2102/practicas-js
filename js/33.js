async function obtenerEmpleados(){
    const archivo='empleados.json';//aqui iria una url
// CON PROMISES
    // fetch(archivo)
    // .then(resultado=> resultado.json())
    // .then(datos=>{
    //     // console.log(datos);
    //     const {empleados}=datos;
    //     // Almacena los datos de la variable datos en empleados
    //     empleados.forEach(empleado => {
    //         // console.log(empleado);
    //         console.log('-------------------');
    //         console.log(empleado.id);
    //         console.log(empleado.nombre);
    //         console.log(empleado.puesto);

    //         // document.querySelector('.contenido').textContent+=empleado.nombre;
    //     });
    // })

    // AHORA CON ASYN AWAYT

    const resultado=await fetch(archivo);
    const datos=await resultado.json();
    console.log(datos);
}

obtenerEmpleados();