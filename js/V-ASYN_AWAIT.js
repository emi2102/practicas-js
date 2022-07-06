function cuadradoPromise(value){
    if(typeof value!=='number'){
        return Promise.reject(`Error, el valor " ${value} " ingresado no es un numero`);
    }
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                value, result:value*value
            });
            },0 |Math.random()*1000);
        });
    }


// Para usar una funcion asincrona se pone async
async function funcionAsincronaDeclarada(){
    try{
        console.log('Inicio Async Function');
        let obj=await cuadradoPromise(0); //await se encarga de que el programa tenga que esperar a que se ejecute esta linea de codigo para ir a la proxima
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj= await cuadradoPromise(1);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj= await cuadradoPromise(2);
        console.log(`Async Function ${obj.value}, ${obj.result}`);
    }catch(err){
        console.error(err);
    }
}
funcionAsincronaDeclarada();

const funcionAsincronaExpresada= async ()=>{
    try{
        console.log('Inicio Async Function');
        let obj=await cuadradoPromise(3); //await se encarga de que el programa tenga que esperar a que se ejecute esta linea de codigo para ir a la proxima
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj= await cuadradoPromise(4);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj= await cuadradoPromise(5);
        console.log(`Async Function ${obj.value}, ${obj.result}`);
    }catch(err){
        console.error(err);
    }
}
funcionAsincronaExpresada(); 