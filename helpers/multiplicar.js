
const fs = require('fs');

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
        console.log(`Se creo el archivo ${base}`);
    });

}

//Para exportar esta funcion
module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}