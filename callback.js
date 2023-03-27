

//Se envia una funcion de flecha
setTimeout(()=>{
    console.log('hola!!1');
}, 1000)

function saludar(nombre) {
    console.log('Hola ' + nombre+' Se registro tu entrada');
  }
  
  function procesarEntradaUsuario(callback) {
    let  nombre = 'Victor'
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);





const getUsuarioById = (id ) =>{
    usuario = {
        id: id,
        name: 'victor'
    }
    return usuario
}


console.log(getUsuarioById(1))