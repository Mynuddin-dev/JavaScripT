// "I will call back later!"

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

function sample(a, b, callback) {  // main function 

    // implementation hide from the user but not fully
    // user have some control by provided callback function
    
    var c = a + b                   
    var d = a - b
    var result = callback(c, d)    // this callback function provided by user
    return result
}




// User control part 
function sum(a, b) {
    return a + b
    
}

var result1 = sample(5, 8, sum)
console.log(result1)


var result2 = sample(5, 8, function (c,d) {  // we can create function as we need
    return c - d
    
})
console.log(result2)

var result3 = sample(5, 8, function (c,d) {  // we can create function as we need
    return c * d
    
})
console.log(result3)

var result4 = sample(5, 8, function (c,d){  // we can create function as we need
    return c / d
    
})

console.log(result4)





//----------------------------------------------------------------------

// In JavaScript, a callback function is a function that is passed as an
//  argument to another function and is executed after the completion
//  of that function or at a specific event.This allows for asynchronous
// programming and is commonly used for handling asynchronous tasks like 
// making API requests, reading files, or executing timed events.

// Function that simulates an asynchronous task taking 2 seconds to complete

// function doSomething(callback) {
//     console.log("Doing something...");
//     setTimeout(function () {
//       console.log("Task completed!");
//       callback(); // Here we call the callback function after the task is done.
//     }, 2000); // Simulating a 2-second asynchronous task using setTimeout
//   }
  
//   // Callback function to be executed after doSomething completes
//   function onCompletion() {
//     console.log("Callback function executed!");
//   }
  
//   // Call doSomething and pass onCompletion as the callback function
//   doSomething(onCompletion);
  
//   console.log("This will be executed before the task completion.");
  