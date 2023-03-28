
//importamos el uso del paquete uuid
const { v4: uuidv4 } = require('uuid');


class Cliente {
    id = ''
    nombre = ''
    email = ''
    tipo_usuario = null

    constructor( nombre ){
        this.id = uuidv4();
        this.nombre = nombre;
        this.tipo_usuario = null;
    }
}

//Nos sirve para exportar funciones
module.exports = Cliente;

//const cliente = new Cliente('hola')
//console.log(cliente)