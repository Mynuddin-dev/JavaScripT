// Currying is a functional programming concept in JavaScript where a
// function with multiple arguments is transformed into a sequence of
// functions, each taking a single argument.The curried function returns
// a new function for each argument until all the arguments are provided,
// and then it finally evaluates and returns the result.

// Regular function without currying
function add(a, b, c) {
    return a + b + c;
  }
  
console.log(add(1, 2, 3)); // Output: 6
  
  // Curried version of the add function
function firstFuntion(a) {
    return function(b) {
      return function(c) {
        return a + b + c
      };
    };
  }
  
var firstFuncReturn = firstFuntion(1) // first function
var secondFuncReturn = firstFuncReturn(2)//second function
var result = secondFuncReturn(3) //third function
console.log(result)

var result = firstFuntion(1)(2)(3)
console.log(result)
  
