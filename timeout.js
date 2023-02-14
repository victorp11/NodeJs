

//Funciones con timeout
console.log('INICIO DE LA APLICACIÓN')

//Eventos no bloqueantes
setTimeout(()=>{
    console.log('PRIMER TIME OUT')
},3000)

setTimeout(()=>{
    console.log('SEGUNDO TIME OUT')
},0)

setTimeout(()=>{
    console.log('TERCER TIME OUT')
},0)

console.log('TERMINAR DE LA APLICACIÓN')



console.log('Suma de 2 numeros')
let num1 = 20
let num2 = 30
let resultado = num1 + num2
console.log(`RESULTADO: ${resultado}`)
