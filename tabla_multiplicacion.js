

const {crearArchivo} = require('./helpers/multiplicar.js')

const argv = require('yargs').argv;



console.clear()

//console.log(process.argv)
console.log(argv)


console.log(argv.base)



//const base = 7

//crearArchivo(base);

crearArchivo(argv.base);