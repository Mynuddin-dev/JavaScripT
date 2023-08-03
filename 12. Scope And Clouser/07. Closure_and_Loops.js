for (var i = 1; i <= 5; i++) {
    (function (n) {
        setTimeout(function () {
            console.log(n)
        }, 1000 * n)
    })(i)
}



// Immedietly Invoking Function Expression

// Closures and Immediately Invoked Function Expressions(IIFE) are 
// both advanced JavaScript concepts that are often used together to
// create private variables and encapsulation.Let's explore each concept
// and see an example of using both closure and IIFE.

// Closure:
// A closure is a function that "closes over" its lexical environment,
// retaining access to variables from its containing(enclosing) 
// scope even after that scope has finished executing.This allows
// the function to maintain access to the variables it needs, even
// if those variables are not accessible from outside the function.
// Here's an example of a closure using a loop:

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}

var counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
// In this example, the createCounter function creates a closure by 
// returning the increment function. The increment function has access to
// the count variable from its containing scope(createCounter).Even after
// createCounter has finished executing, the increment function still
// retains access to the count variable and can modify it each time it
//  is called.

// Immediately Invoked Function Expression (IIFE):
// An IIFE is a function expression that is immediately invoked (executed) 
// as soon as it is defined.It allows you to create a private scope for 
// your code and avoid polluting the global namespace with variables.

// Here's an example of an IIFE:

(function () {
    let secretVar = "I am a secret";

    function secretFunction() {
        console.log(secretVar);
    }

    secretFunction();
})();

// The following code will cause an error since secretVar and
// secretFunction are not in the global scope
console.log(secretVar);
secretFunction();

// In this example, we define an anonymous function and immediatey 
// invoke it with () at the end.Inside the IIFE, we have a private variable
// secretVar and a private function secretFunction, which are not accessible
// outside the IIFE's scope.

// Now, let's combine closure and IIFE:


var counter = (function () {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return increment;
})();

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

// In this example, we create a closure by returning the increment function
// inside the IIFE.The IIFE creates a private scope for the count variable,
// and the returned increment function retains access to it.This allows us
// to create a private counter that cannot be directly accessed or modified 
// from outside the IIFE.

// Closures and IIFEs are powerful concepts in JavaScript that enable better
// code organization, data encapsulation, and modularization.They are widely
// used in modern JavaScript development to create more robust and maintainable
// code.