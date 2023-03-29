

/*
for (i=1;i<=10;i++){
    console.log('5 x '+ i +'='+ 5*i)
}*/

//const fs = require('fs');

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

/*
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
*/


const fs = require('fs');
let salida = ''
// Crear una variable para almacenar el número del que se generará la tabla
const multiplicador = 5;
// Crear un bucle for que genere la tabla del 5 hasta 50 (5 x 10)
for (let i = 1; i <= 10; i++) {
  // Multiplicar el número por el multiplicador y almacenar el resultado en una variable
  const resultado = i * multiplicador;
  // Mostrar el resultado en la consola del navegador
  //console.log(`${multiplicador} x ${i} = ${resultado}`);
  salida += `${multiplicador} x ${i} = ${resultado}\n`;
}
//console.log(salida)
//Crear un archivo 
fs.writeFile(`tabla-curso-${multiplicador}.txt`, salida, (err) => {
    if (err)throw err;
    console.log('The file has been saved!');
  });

  function error (err){
    //si archivo corrupto return false
  }
