// This loop will always be executed at least once, even if the condition is false,
// because the code block is executed before the condition is tested:

/*
Syntax
do
   statement
while (condition);

statement
A statement that is executed at least once and is re-executed each time the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements.
condition
An expression evaluated after each pass through the loop. If condition evaluates to true, the statement is re-executed. When condition evaluates to false, control passes to the statement following the do...while.
*/


var isRunning = false
while (isRunning) {
  console.log("I am Running")
}

// do {
//   console.log("I am Running")
// } while (isRunning) 


var text = ""
var i = 0
do {
  text += i+" "
  i++
} while (i < 5)

console.log(text)


// var text = ""
// var i = 0
// do {
//   text += i+" "
//   i++
// } while (i > 0 && i < 5)

// console.log(text)