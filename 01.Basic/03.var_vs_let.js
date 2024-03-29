for (var i = 0; i < 5; i++) {
    console.log(`Inside the loop: ${i}`)
}

console.log(`Outside the loop: ${i}`)

for (let j = 0; j < 5; j++) {
    console.log(`Inside the loop: ${j}`);
}

console.log(`Outside the loop: ${j}`);


/* 
#1: Variable scopes
The var variables belong to the global scope when you define them outside a function, for example:

var counter;
In this example, the counter is a global variable. It means that the counter variable is accessible by any functions.

When you declare a variable inside a function using the var keyword, the scope of the variable is local. For example:

function increase() {
    var counter = 10;
}
// cannot access the counter variable here
In this example, the counter variable is local to the increase() function. It cannot be accessible outside of the function.

The following example displays four numbers from 0 to 4 inside the loop and the number 5 outside the loop.

for (var i = 0; i < 5; i++) {
    console.log(`Inside the loop: ${i}`);
}

console.log(`Outside the loop: ${i}`);
Output:

Inside the loop: 0 
Inside the loop: 1 
Inside the loop: 2 
Inside the loop: 3 
Inside the loop: 4 
Outside the loop: 5
In this example, the i variable is a global variable. Therefore, it can be accessed from both inside and after the for loop.

The following example changes from var to let keyword:

for (let i = 0; i < 5; i++) {
    console.log(`Inside the loop: ${i}`);
}

console.log(`Outside the loop: ${i}`);
In this case, the code shows four numbers from 0 to 4 inside a loop and a reference error:

Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4
The error:

Uncaught ReferenceError: i is not defined
Since this example uses the let keyword, the variable i is blocked scope. It means that the variable i only exists and can be accessible inside the for loop block.

In JavaScript, a block is delimited by a pair of curly braces {} like in the if...else and for statements:

if(condition) {
   // inside a block
}

for(...) {
  // inside a block
}
#2: Creating global properties
The global var variables are added to the global object as properties. The global object is window on the web browser and global on Node.js:

var counter = 0;
console.log(window.counter); //  0
However, the let variables are not added to the global object:

let counter = 0;
console.log(window.counter); // undefined
#3: Redeclaration
The var keyword allows you to redeclare a variable without any issue:

var counter = 10;
var counter;
console.log(counter); // 10
However, if you redeclare a variable with the let keyword, you will get an error:

let counter = 10;
let counter; // error


Avobe all
  let = Block scoped (variable)declaration
  var = global scoped (variable)declaration
*/


// // Example using var
// function exampleVar() {
//   if (true) {
//     var x = 10;
//     console.log(x); // Output: 10
//   }
//   console.log(x); // Output: 10 (var is function-scoped)
// }
// exampleVar();

// // Example using let
// function exampleLet() {
//   if (true) {
//     let y = 20;
//     console.log(y); // Output: 20
//   }
//   // console.log(y); // Uncommenting this line will result in a ReferenceError (let is block-scoped)
// }
// exampleLet();
