
// 1. A Function can be stored in a variable
function add(a, b) {
    return a + b
    
}
var sum = add
console.log(sum(5, 6))
console.log(typeof sum)

// 2. A Function can be stored in a Array 

var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 10))

// Functions can be stored in data structures
const functionArray = [greet, doubleNumber];
console.log(functionArray[0]("Alice")); // Output: "Hello, Alice!"
console.log(functionArray[1](3));       // Output: 6


// 3. A Function can be stored in a Object
// in oop we will more clear that

var obj = {

    Summation: add
}

console.log(obj)
console.log(obj.Summation(5,5))

// 4. We can creat a function as we need (inner function)

setTimeout(function () {
    console.log("I have created as a inner function")
})


// They are higher order function
// 5. We can pass function as arguments



// 6. We can return function from another function
