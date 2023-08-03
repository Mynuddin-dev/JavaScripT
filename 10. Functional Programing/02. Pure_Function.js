/*

First Condition: A pure function is a function that, given the same input, always  produces the same output 

Second Conditions: Has no observable side effects side meaning it doesn't modify any external state or data.

To be a pure function its must be follow two condition

*/

//Pure Function
function multiply_numbers(a, b) {
    return a * b
}

console.log(multiply_numbers(3, 5))  
console.log(multiply_numbers(3, 5))
console.log(multiply_numbers(3, 5))

// Full Program e ei function er kono side effect o nai

// In this example, multiply_numbers is a pure function because it always returns the same output when given the same inputs.
// No matter how many times you call multiply_numbers(3, 5), it will always return 15 as long as the arguments remain the same. 
    

// Impure or not pure function 
// Example 1

var n = 10
function change() {
    n = 100
}
change()
console.log(n)

// This is not a pure function.It always produce same output bu its change the value of n, thats a side effect

// Example 2

var point = {
    x: 45,
    y: 35
    
}
console.log(point)

function printPoint(point) {
    point.x = 200
    point.y = 300
    console.log(point)

}

printPoint(point)
printPoint(point)
printPoint(point)

console.log(point)


// Function printPoint is not a pure function. It always produce same output but its has a side effect which change the object point value