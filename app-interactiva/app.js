
require('colors');

const {menu,pausa} = require('./helpers/menu')
const Cliente = require('./models/cliente');
const Clientes = require('./models/Clientes');
const leerInput = require('./helpers/input')

const main = async() =>{
   const clientes  = new Clientes();
   let opt =  '';
   
   do{

      //Le decimos al menu que este esperando una opcion 
      opt = await menu();
      switch(opt){
         case '1':
            //Crear cliente
            const nombre = await leerInput('Nombre del cliente:');
            //console.log(nombre);
            clientes.crearCliente(nombre);

         break;
         case '2':
            console.log(clientes._clientes)
         break;
      }
      //console.log({opt});
      await pausa();

   } while( opt !== '0')
}
main();




