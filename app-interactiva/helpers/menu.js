const { rejects } = require('assert');
const { resolve } = require('path');

require('colors');

const menu = ()=>{
    //Una promesa siempre resulve con un resolve y un rejects
    //return new Promise(resolve,rejects);
    return new Promise(resolve =>{
        console.clear();
        console.log('=================='.green);
        console.log('       MENU'.green);
        console.log('==================\n'.green);
    
        console.log(`(1). Crear cliente`)
        console.log(`(2). Lista de clientes`)
        //console.log(`(2). Borrar cliente`)
        //console.log(`(4). Actualiza cliente`)
        //console.log(`(0). Salir\n`)
    
        //Uso de std
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        //Ejecuta un callback, cuando el usuario introduce la opcion
        readline.question(`Seleccione una opción:`,(opt) =>{
            //imprime opcion seleccionada
            //console.log(opt)
            readline.close();
            resolve(opt);
        })
    });
}

const pausa = () =>{

    return new Promise ((resolve)=>{
            //Uso de std
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });

            //Ejecuta un callback, cuando el usuario introduce la opcion
            readline.question(`Presionar ENTER para continuar`,(opt) =>{
                readline.close();
                resolve();
            })
    })
     
}

//Nos sirve para exportar funciones
module.exports = {
    menu,pausa
}