//Declaramos un arreglo de peras
const peras = ['🍐','🍐','🍐']
//Resultado en mazanas 🍎
let manzanas = []
//funcion de flecha que cambia pera por manzana
const procesar = (valor) =>{
    return new Promise((resolve,reject)=>{
        //Tiempo de conexión a una BD, API
        setTimeout(()=>{
            if(valor === '🍐'){
                resolve('🍎')  ;
            }
        },10000);
    });
}

/*for(let i = 0;i < peras.length;i++){
    console.log(peras[i]);
    manzanas += procesar(peras[i])
    //console.log(manzana);
}*/

manzanas = peras.map((i)=> procesar(i))
//console.log(manzanas);
//Iterador de promesas
const resultado = Promise.all(manzanas);
resultado.then((respuesta)=>{
    console.log(`valor = ${respuesta}`)
})
