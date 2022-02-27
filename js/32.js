
/* Async/ Await */

function descargarNuevosClientes(){
   return new Promise (resolve =>{
    console.log("Descargando clientes... espere...");
    setTimeout( ()=>{// esperamos 5 segundos
       resolve('Los clientes fueron descargados');
    },5000);

});
    
}


async function app(){
    console.log('app lista');
}

app();
// setTimeout( function(){// esperamos 5 segundos
//     console.log("set Timeout");
// },5000);