
/* ==== Ejemplo de objeto a manejar ====
*  _clientes:  
                {"uuid-123123-123123-2": {id: 1, nombre:'victor ponce'}},
                {"uuid-123123-123123-2": {id: 2, nombre:'frida ponce'}}
*/

const Cliente = require('./cliente');

//Clase encargada del manejo de los clientes a crear y listar
class Clientes{

    _clientes ={};

    constructor(){
        this._clientes = {}
    }


    //Metodo que llama a la clase "Cliente", para crear un cliente
    crearCliente(name=''){

        const cliente =new Cliente(name);
        //Con esto agregamos el cliente a nuestra lista de clientes
        this._clientes[cliente.id] = cliente;
        //console.log(this._clientes);

    }

}

module.exports = Clientes;