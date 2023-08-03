var x = 55
function test() {
    x = 45
    console.log(x)
}
test()

// In JavaScript, scope refers to the visibility and accessibility of
// variables, functions, and objects in different parts of your code
// during runtime.It determines where a particular variable or function
// can be accessed and modified.

// 1. Global Scope: Variables declared outside of any function or block have
// global scope.They are accessible from any part of your code, including 
// inside functions and blocks.Global variables are declared using var,
// let, or const without being inside any function or block.

var globalVar = "I am a global variable";

function exampleFunction() {
    console.log(globalVar); // Accessible inside the function
}

console.log(globalVar); // Accessible outside the function

// 2. Local Scope: Variables declared inside a function or block
//  have local scope.They are accessible only within that particular
// function or block and are not visible outside.

function exampleFunction() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible inside the function
}

exampleFunction();

console.log(localVar); // Error: localVar is not defined (not accessible outside the function)

// It's important to understand scope to avoid unintended variable shadowing or unexpected behavior.
//  If a variable is declared with the same name in a nested scope, it will "shadow" the outer variable,
// making it inaccessible inside that inner scope.

var x = 10;

function outerFunction() {
    var x = 20; // This variable x shadows the global variable x

    function innerFunction() {
        var x = 30; // This variable x shadows both the outer x and the global x
        console.log(x); // Output: 30
    }

    innerFunction();
    console.log(x); // Output: 20
}

outerFunction();
console.log(x); // Output: 10 (The global variable x remains unchanged)



