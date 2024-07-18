// 1.- Concatena dos cadenas de texto
let myName = "Omar"
let greeting = "Saludos cordiales!"
console.log(`Hola, ${myName} Tu saludo es ${greeting}!`)


//2. - Muestra la longitud de una cadena de texto
console.log(greeting.length)

// 3. - Muestra el primer y último carácter de un string
console.log(greeting[0])
console.log(greeting[17])

// 4.-  Convierte a mayúsculas y minúsculas un string
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// 5.- Crea una cadena de texto en varias lineas
let mensaje = `este es un mansaje 
de texto 
en vaarias lineas`

// 6.-  Interpola el valor de una variable en un string
console.log(typeof greeting)

// 7.- Remplaza todos los espacios en blanco de un string por guiones
console.log(greeting.replace(" ", "-"))

// 8.-  Comprueba si una cadena de texto contiene una palabra concreta
console.log(greeting.includes("Saludos"))

// 9.- Comprueba si dos strings son iguales
const string1 = "Hola"
const string2 = "Hola"

console.log(string1 == string2); // true

//10 .- Comprueba si dos strings tiene la misma longitud
console.log(greeting.slice("0, 10"))
