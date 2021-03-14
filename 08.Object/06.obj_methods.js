var obj = {
    x: 10,
    y: 20,
    z: 30
}

console.log(obj)

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))  //Multi-Dimensinal Array

console.log("\n")

//var obj1 = obj //deep copy
var obj1 = Object.assign({} , obj) //shallow copy

obj1.x = 12
obj1.y = 22

console.log(obj)
console.log(obj1)




const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function () {
        console.log('hello')
    }
}

console.log(person.greet())
console.log(person.name)