
//File System
// https://nodejs.org/dist/latest-v19.x/docs/api/fs.html

const fs = require('fs');
console.clear()
console.log("=============TABLA DEL 5 ==========")

const base = 5;
let salida = ''

for(let i = 1; i<=10;i++){
    salida += `${base} x ${i} = ${base*i} \n`
}


//console.log(salida)
/*
fs.writeFile('Tabla_5.txt', salida, (err) => {
    if (err) throw err;
    console.log('El archivo fue creado!');
  });
  */

const [ , ,arg3] = process.argv;

console.log(process.argv)





