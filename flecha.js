


//
function sumar (x,y = 10){
    return x + y
}
console.log(sumar(5,10))
console.log(sumar(5))




// Función tradicional
function suma (x){
    return x + 100;
  }
  
  // Desglose de la función flecha
  
  // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
  const a1 = (a) => {
    return a + 100;
  }
  
  // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
  const a2 = (a) => a + 100;
  

  console.log(a1(10))
  console.log(a2(10))


const validador = (a,b) =>{
    if(a > b){
        return a + b
    }else{
        return a * b
    }
}

console.log(validador(4,100))







