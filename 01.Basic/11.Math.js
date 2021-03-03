console.log(eval(23/23*43-244|4))
console.log(Math.E)
console.log(Math.PI)

console.log("\n")


console.log(Math.abs(-1))
console.log(Math.abs(-45))
console.log(Math.abs(-5.4))
console.log(Math.abs(43.34))

console.log("\n")

console.log(Math.floor(5.489))
console.log(Math.ceil(5.489))
console.log(Math.round(5.489))
console.log(Math.round(5.589))
console.log(Math.trunc(13.37))
console.log(Math.trunc(42.84), Math.trunc(0.84))

console.log("\n")

console.log(Math.max(7,3,2,7,9,4,6))
console.log(Math.min(7,3,2,7,9,4,6))

console.log("\n")

console.log(Math.pow(2,5) , 2**5)
console.log(10e-3)
console.log(Math.pow(3,3) , 3**3)
console.log(Math.pow(3,-3) , 3**-3 ,1/27)
console.log(Math.pow(0,3) , 0**3)
console.log(Math.pow(323212312,0) , 45234544**0)

console.log(Math.sqrt(64))
console.log(Math.sqrt(.25))
console.log(Math.sqrt(-.81))
console.log(Math.sqrt(-64))
console.log(Math.sqrt(81))
console.log(Math.sqrt(80))

console.log("\n")

console.log(Math.random())
console.log(Math.random() * 50 + 1)

console.log("\n")
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround#


Method	                Description
abs(x)	      //Returns the absolute value of x
acos(x)	      //Returns the arccosine of x, in radians
acosh(x)	  //Returns the hyperbolic arccosine of x
asin(x)	      //Returns the arcsine of x, in radians
asinh(x)	  //Returns the hyperbolic arcsine of x
atan(x)	      //Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	  //Returns the arctangent of the quotient of its arguments
atanh(x)	  //Returns the hyperbolic arctangent of x
cbrt(x)	      //Returns the cubic root of x
ceil(x)	      //Returns x, rounded upwards to the nearest integer
cos(x)	      //Returns the cosine of x (x is in radians)
cosh(x)	      //Returns the hyperbolic cosine of x
exp(x)        //Returns the value of Ex
sin(x)	      //Returns the sine of x (x is in radians)
sinh(x)	      //Returns the hyperbolic sine of x
sqrt(x)	      //Returns the square root of x
tan(x)	      //Returns the tangent of an angle
tanh(x)	      //Returns the hyperbolic tangent of a number
trunc(x)	  //Returns the integer part of a number (x)

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
*/



console.log(Math.E)
console.log(Math.exp(12))
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG10E)
console.log(Math.expm1(2)) //e^x-1
console.log(Math.log2(2))
console.log(Math.log10(2))
console.log(Math.LOG2E)
console.log(Math.hypot(20))

console.log("\n")
//To solve this, Math.fround() can be used to cast the 64-bit float to a 32-bit float.
console.log(Math.fround(5.5))
// https://www.geeksforgeeks.org/javascript-math-fround-function/

console.log(Math.fround(5.05))
// expected output: 5.050000190734863

console.log(Math.fround(5))
// expected output: 5

console.log(Math.fround(-5.05))
// expected output: -5.050000190734863
console.log(Math.fround(2 ** 150))








