//Set

//Declaración
//set vacio con new Set
let mySet = new Set()

console.log(mySet)

//Inicialización

mySet = new Set("Omar", "Sanchez" , "Oedevelop" , 34, true, "Odeveloper", "https://osanchez.dev")
console.log(mySet)

//Métodos comunes

//Add y delete

mySet.add("https://moure.dev")
mySet.add("https://osanchez.dev")
console.log(mySet)

mySet.delete("Sanchez")
console.log(mySet)

console.log(mySet.delete("Omar"))
console.log(mySet.delete(4))
console.log(mySet)

//has  = comprueba si de vdd existe un elemento

console.log(mySet.has("Omarss"))
console.log(mySet.has("https://osanchez.dev"))

//size
console.log(mySet.size)

// Convierte un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convierte un array a set

mySet = new Set(myArray)
console.log(mySet)

//No admite duplicados
mySet.add("https://osanchez.dev")
mySet.add("https://osanchez.dev")
mySet.add("https://osanchez.dev")
console.log(mySet)