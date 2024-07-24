//array

// Declaración
let myArray =  []
let myArray2 = new Array()
console.log(myArray)
console.log(myArray2)

// Inicialización
myArray = ["Brais", "Moure", "mouredev" 35, true]
myArray2 = new Array("Omar" ,"Inge" , 36, false)
console.log(myArray)
console.log(myArray2)

myArray = new Array(3)
myArray[0] = "Omar"
// myArray2[1] = "Inge"
myArray[2] = "OsanchezDeveloper"
console.log(myArray)

// Métodos comunes
//push y pop
myArray.push("OmarS")
myArray.push("Mois")
myArray.push(35)
console.log(myArray)
console.log(myArray.pop()) //Elimina el último y lo devuelve
myArray.pop()
console.log(myArray)

// Shift y unshift
console.log(myArray.shift())
console.log(myArray)
// Longht
console.log(myArray.length)
//clear
myArray = []
myArray.length = 0
console.log(myArray)
//slice
myArray = ["Brais", "Moure", "mouredev" , 35, true]
let myNewArray = myArray.slice("Brais", "Moure", "mouredev", 35, true)
console.log(myArray)
console.log(myNewArray)

//splice elimina elementos del array desde hasta
myArray.splice(1, 3)
console.log(myArray)

myArray = ("Brais", "Moure", "mouredev", 35, true)
console.log(myArray)