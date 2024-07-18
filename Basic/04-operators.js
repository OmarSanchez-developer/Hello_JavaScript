// Operadores

// Operadores Aritmeticos

let a = 5
let b = 10

console.log( a + b) // Suma
console.log( a - b) // Resta
console.log( a * b) // Multiplicación
console.log( a / b) // División

console.log( a % b) // Módulo
console.log( a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- //Decremento
console.log(b)

//Operadores de asignacion

let myVariable = 2
console.log(myVariable) 
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparacion

console.log( a > b)
console.log( a < b)
console.log( a >= b)
console.log( a <= b)
console.log( a == b)
console.log( a == 6) // Igual por Valor
console.log( a == "6") // Igual por Valor
console.log( a == a)
console.log( a === a) // Igual por identidad (por tipo y valor)
console.log( a === 6) 
console.log( a === "6") 
console.log( a != 6) 
console.log( a !=="6") 
console.log( 0 == false) 
console.log( 1 == false) 
console.log( 2 == false) 
console.log( 0 == "") 
console.log( 0 == " ") 
console.log( 0 == '') 
console.log( 0 == "Hola") 
console.log( 0 === "") 
console.log( undefined == null) 
console.log( undefined === null) 

// Truthy Values (valores verdaderos)
//Todos los valores numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
//El boolean true

//Flasy values (valores falsos)
// 0
// 0n
// null
// undefined
//NaN
// El boolean false
//Cadenas de texto vacias

// Operadores lógicos

// and (&&)
console.log( 5 > 10 && 15 > 20)
console.log( 5 < 10 && 15 < 20)
console.log( 5 < 10 && 15 > 20)
console.log( 5 > 10 && 15 > 20 && 30 > 40) 

// Or
console.log( 5 > 10 || 15 > 20)
console.log( 5 < 10 || 15 < 20)
console.log( 5 < 10 || 15 > 20)
console.log( 5 > 10 || 15 > 20 || 30 > 40)

console.log (5 > 10 && 15 > 20 || 30 < 40)

// Not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

//Operadores ternarios

const isRaining = true
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviviendo")