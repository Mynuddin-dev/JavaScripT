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

// var obj1 = obj 
var obj1 = Object.assign({} , obj) 

obj1.x = 12
obj1.y = 22

console.log(obj)
console.log(obj1)




var person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function () {
        console.log('hello')
        // return "hello"
    }
}

// console.log(person.greet())
person.greet()
console.log(person.name)


// var person = {
//     name: 'Sam',
//     age: 30,
//     // using function as a value
//     greet: function () {
//       console.log('Hello, I am ' + this.name);
//     }
//   };
  
//   person.greet(); // Output: Hello, I am Sam
//   console.log(person.name); // Output: Sam
  

// var person = {
//     name: 'Sam',
//     age: 30,
//     // using function as a value
//     greet: function () {
//       console.log('Hello duds')
//     }
//   }
  
//   person.greet() // Output: Hello duds
//   console.log(person.name) // Output: Sam
  