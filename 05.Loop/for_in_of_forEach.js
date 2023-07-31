// for (key or index in object) {
//     // code block to be executed
//   }


var person = [45, 4, 9, 16, 25]

for (let x in person) { 

    console.log(x)  //return x as a key or index
    
}

// Example Explained
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

for (let x of person) { 

    console.log(x)  //return the value
    
}

// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.


// for each 
// array.forEach(callbackFunction(element, index, array) {
//     // Code to be executed for each element
//   });
  
const fruits = ["apple", "banana", "orange"]

fruits.forEach(( fruit, index) => {
  console.log(`Index ${index}: ${fruit}`)
})

var numbers = [45, 4, 9, 16, 25];

numbers.forEach((value, index, array) => {
    console.log(value, index, array)
})
