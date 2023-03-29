

//
const argv = require('yargs').argv;

var colors = require('colors');

const {crearArchivo} = require('./helpers/multiplicar')

crearArchivo(3);

console.log(argv)
console.log(argv.base)
//crearArchivo(argv.base);





/*



//const argv = require('yargs').argv;



console.clear()

//console.log(process.argv)
console.log(argv)


console.log(argv.base)



//const base = 7

//crearArchivo(base);

crearArchivo(argv.base);

*/