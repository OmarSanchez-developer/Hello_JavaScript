// Strings

let myName = "Omar"
let greeting = "Hola,  "+ myName + "!"
console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[11])

//Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Omar"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Omar"))
console.log(greeting.includes("S"))

console.log(greeting.slice("0, 10"))
console.log(greeting.replace("Omar", "OmarsanchezDev"))


// Template literals (plantillas literales)
let message = `Hola, este
es un curso de
JavaScript`

console.log(message)

let email = "omarsanch@hotmail.com"

console.log(`Hola, ${myName} Tu email es:  ${email}!`)







