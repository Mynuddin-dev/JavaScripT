// Arithmetic operator
// + - / * % ++ --

//Addition operator

console.log(2 + 2)
// expected result: 4

console.log(2 + true)
// expected result: 3

console.log('hello ' + 'everyone')
// // expected result: "hello everyone"

console.log(2001 + ': A Space Odyssey')
// // expected result: "2001: A Space Odyssey"


// // Number + Number -> addition
console.log(1 + 2 ) // 3

// // Boolean + Number -> addition
console.log(true + 1 )// 2


// Boolean + Boolean -> addition
console.log(false + false) // 0
console.log(true + false)
console.log(true + true + false)


// // String + String -> concatenation
console.log('foo' + 'bar') // "foobar"

// // Number + String -> concatenation
console.log(5 + 'foo') // "5foo"      auto convert

// // String + Boolean -> concatenation
console.log('foo' + false) // "foofalse   auto convert



// Subtraction Operator
console.log(5 - 3)
// expected output: 2

console.log(3.5 - 5)
// expected output: -1.5

console.log('hello' - 45)
console.log(5 - 'hello')
// expected output: NaN

console.log(5 - true)
// expected output: 4

console.log(54-34)
console.log(34-45)



// Division operator
console.log(12 / 2)
// expected output: 6

console.log(3 / 2)
// expected output: 1.5

console.log(6 / '3')
// expected output: 2

console.log(2 / 0)
// expected output: Infinity


console.log(1 / 2)             // 0.5

x = Math.floor(3 / 2)
console.log(x) 

console.log(1.0 / 2.0)
console.log(1.5454 / 2.0)



// //Multiplication Operator
// console.log(3 * 4)
// // expected output: 12
console.log("")

console.log(-3 * 4)
// expected output: -12

console.log(3 * '2')
console.log('3' * 2)
console.log('3' * '2')
// expected output: 6

console.log('foo' * 2)
// expected output: NaN

console.log("\n", 3* 4)
console.log(3 * -8)
console.log(3 * Infinity)
console.log(Infinity * Infinity)
console.log(-Infinity * Infinity)
console.log(0 * Infinity)
console.log(-54 * Infinity)

console.log("")

// Reminder Or Modulas %
console.log(12 % 5)
console.log(-12 % 5)
console.log(4 % 2)
console.log(-4 % 2)
console.log(11 % 2)
console.log(11 % 6)
console.log(21 % 6)

console.log(4.526 % 2)
console.log(NaN % 2)
console.log(Infinity % 2)
console.log(Infinity % 0)
console.log(Infinity % Infinity)

// incremental operator
console.log("")
var a = 11
var b = 6

// console.log(++a)
// console.log(a++)
// console.log(a)

// console.log(--b)
console.log(b--)
console.log(b)
