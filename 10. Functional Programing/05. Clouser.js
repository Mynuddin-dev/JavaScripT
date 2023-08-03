// jdi kono scope er vitore baire theke data ase etak amra clouser bolbo

// var b = 10 // Global scope 

// function A() {  // anoter scope
//     console.log(b)
// }
// A()


function A() {  // anoter scope
    var x = 5
    return function() {
        console.log(x)
    }
}
var abc = A()
// console.dir(abc) // copy an paste it into browser console , there we can see inner function x as a clouser


function outerFunction() {
  const outerVariable = 'I am from the outer function'

  function innerFunction() {
    console.log(outerVariable)
  }

  return innerFunction
}

var closureExample = outerFunction()
closureExample()

/*
----------------------------------------- More Clear ---------------------------------------------
In JavaScript, a closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has finished executing. This happens because the inner function "closes over" the variables of its outer function, preserving them in memory and allowing the inner function to access and use them.

Here's an example to illustrate closures in JavaScript:

function outerFunction() {
  const outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: "I am from the outer function"

In this example, outerFunction creates an inner function innerFunction. When outerFunction is called and innerFunction is returned, the outerVariable is still accessible within innerFunction even though outerFunction has finished executing. This behavior is due to the closure.

Here's how it works step by step:

We call outerFunction(), which creates a local variable outerVariable and defines the inner function innerFunction.

innerFunction is then returned from outerFunction and assigned to the variable closureExample.

After outerFunction has finished executing, closureExample still holds a reference to the innerFunction, and the outerVariable is still accessible inside innerFunction because of the closure.

When we call closureExample(), it prints the value of outerVariable, which is "I am from the outer function".

Closures are powerful because they allow you to create private variables and encapsulate logic. They are widely used in JavaScript, particularly in scenarios involving asynchronous operations, callbacks, and functional programming techniques.

*/



