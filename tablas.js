

/*
for (i=1;i<=10;i++){
    console.log('5 x '+ i +'='+ 5*i)
}*/

const fs = require('fs');

/*


const base = 5;
let salida = ''
for (i=1;i<=10;i++){
    //console.log(base+' + '+ i +' = '+ base *i)
    //console.log(`${base} + ${i} = ${base*i}`)
    salida += `${base} + ${i} = ${base*i}\n`;
}

//llama un callback de err 
fs.writeFile('tabla-5.txt', salida, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

*/


const crearArchivo = (base = 5) =>{

    console.log('-------------------')
    let salida = ''

    for (i=1;i<=10;i++){
        //console.log(base+' + '+ i +' = '+ base *i)
        //console.log(`${base} + ${i} = ${base*i}`)
        salida += `${base} + ${i} = ${base*i}\n`;
    }

    //llama un callback de err 
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        console.log('Se creo el archivo');
    });

}

//Para exportar esta funcion
module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}