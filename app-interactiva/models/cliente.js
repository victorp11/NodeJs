
const { v4: uuidv4 } = require('uuid');


class Cliente {
    id = ''
    nombre = ''
    email = ''
    mascota = null

    constructor( nombre ){
        this.id = uuidv4();
        this.nombre = nombre;
        this.mascota = null;
    }
}

//Nos sirve para exportar funciones
module.exports = Cliente;

//const cliente = new Cliente('hola')
//console.log(cliente)