
require('colors');

const {menu,pausa} = require('./helpers/menu')
const Cliente = require('./models/cliente');

const main = async() =>{



   
   let opt =  '';
   
   do{

      //const cliente  = new Cliente('123');
      //console.log(cliente)

      
      //Le decimos al menu que este esperando una opcion 
      opt = await menu();
      //console.log({opt});
      await pausa();

   } while( opt !== '0')
}
main();