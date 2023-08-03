
// They are higher order function
// 5. We can pass function as arguments
// 6. We can return function from another function


function add(a, b) {
    return a + b
    
}

function manipulate(a, b, func) {
    var c = a + b // 7
    var d = a - b // 1

    // function multiply() {
    //     var m = func(c, d) //m=8
    //     return c * d * m   // 7*1*8
        
    // }
    // return multiply

    return function(){
            var m = func(c, d) //m=8
            return c * d * m   // 7*1*8
            
        }
}

var multiply = manipulate(4, 3, add)

console.log(multiply)
console.log(multiply())


// More exapmle
// 5. We can pass function as arguments

function executeFunction(func, arg) {
    return func(arg);
  }
  
function doubleNumber(num) {
    return num * 2;
}

console.log(executeFunction(doubleNumber, 5)) // Output: 10
  

// 6. We can return function from another function

function createMultiplier(multiplier) {
    return function (num) {
      return num * multiplier;
    }
  }
  
var double = createMultiplier(2);
console.log(double);
console.log(double(5)); // Output: 10
  