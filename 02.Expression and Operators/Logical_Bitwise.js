
//https://www.youtube.com/watch?v=PyfKCvHALj8
/*
console.log(~12) //Complement Operator
console.log(~1)
console.log(~0)

console.log(12 & 13 , 25 & 30)   //Bitwise &
console.log(12 | 13 , 25 | 30)   // Bitwise |
console.log(12 ^ 1)             //Xor Operator
console.log(12 ^ 13)            //odd num of 1 is 1 otherwise 0
console.log(25 ^ 30)

console.log(10 << 2)           //Left shift   => Gaining Bits

var a = 5                       //Left shift assignment operator
// a <<= 2; // 20
console.log(a)

console.log(10 >> 2)           // right shift => loosing bits
 
*/

// Logical Operators
/*
The following operation involving booleans:
bCondition1 && bCondition2
is always equal to:
!(!bCondition1 || !bCondition2)

As logical expressions are evaluated left to right, it is always possible to remove
parentheses from a complex expression following some rules.

The following composite operation involving booleans:
bCondition1 || (bCondition2 && bCondition3)
is always equal to:
bCondition1 || bCondition2 && bCondition3


const a = 3
const b = -2

console.log(a > 0 && b > 0)

var x = 4
var y = 2
console.log(x > 0 && y > 0)

console.log
a1 = true  && true       // t && t returns true
console.log(a1)
a2 = true  && false      // t && f returns false
console.log(a2)
a3 = false && true       // f && t returns false
console.log(a3)
a4 = false && (3 == 4)   // f && f returns false
console.log(a4)
a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
console.log(a5)
a6 = false && 'Cat'      // f && t returns false
console.log(a6)
a7 = 'Cat' && false      // t && f returns false
console.log(a7)
a8 = ''    && false      // f && f returns ""
console.log(a8)
a9 = false && ''         // f && f returns false
console.log(a9)

*/

const a = 3
const b = -2

console.log(a > 0 || b > 0)

var x = 4
var y = 2
console.log(x > 0 || y > 0)

a1 = true  || true       
console.log(a1)
a2 = true  || false      
console.log(a2)
a3 = false || true       
console.log(a3)
a4 = false || (3 == 4)   
console.log(a4)
a5 = 'Cat' || 'Dog'      
console.log(a5)
a6 = false || 'Cat'      
console.log(a6)
a7 = 'Cat' || false      
console.log(a7)
a8 = '' || false      
console.log(a8)
a9 = false || ''         
console.log(a9)

console.log("\n\n")

console.log(!true)
console.log(!false)
console.log(!"")
console.log(!"cat")
console.log(!!true)
console.log(!!{})
console.log(!!false)
console.log(!!"")
console.log(!Boolean(false))

console.log("\n")
console.log(!0)
console.log(!1)

