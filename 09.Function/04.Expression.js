//Function stored in a variable = Thats called "Function Expression"
//Without function name , create a function that is "Anonymous function"

// if we invoked or call our function with variable(where store the function) so why we need function name huh?

var addition = function (a, b) {
    return a + b;
}

console.log(addition(10,20))

// var R = add(10, 20)
// console.log(R)


setTimeout(function () {
    console.log("I will call After 5 Second")
}, 5000)

var another = addition  //not call here . Just store
console.log(another)
console.log(another(20,30))