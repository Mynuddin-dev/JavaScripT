//  The algorithm to compare two strings is simple:

// Compare the first character of both strings.
// If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// Repeat until the end of either string.
// If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
// In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

// The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

// G is the same as G.
// l is the same as l.
// o is greater than e. Stop here. The first string is greater.

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

var str1 = "abc"
var str2 = "bcd"

console.log("\n")

console.log(str1 == str2)
console.log(str1 < str2) //lexocographically order
console.log(str1 > str2)

console.log("\n")

console.log( '2' > 1 )
console.log( '01' == 1 )
console.log("\n")

console.log("b" < "c")

console.log("\n")
console.log("a" > "b")
console.log("A" > "Z")
console.log("z" > "A")
console.log("a" > "Z")
console.log("d"<"e")

var a = "aaaabZ"
var b = "aaaabz"

console.log(a == b)
console.log(a < b) 
console.log(a > b)
console.log("\n")


var an = "abbcd"
var bm = "abbce"
console.log(an == bm)
console.log(an < bm) 
console.log(an > bm)
console.log("\n")

console.log("d">"e")
console.log("a" < "b")

console.log("\n")

let s1 = '2 + 2'              // creates a string primitive
let s2 = new String('2 + 2')  // creates a String object
console.log(eval(s1))         // returns the number 4
console.log(eval(s2))         // returns the string "2 + 2"


