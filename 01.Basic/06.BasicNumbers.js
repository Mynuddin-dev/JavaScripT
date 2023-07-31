
// var n1 = 14
// var n2 = 43.54
// var num1 = Number(475.43)
// var num2 = Number("4758934.2474847")

// console.log(num1)
// console.log(num2)
// console.log(n2)

// console.log(parseFloat(n1))
// console.log(typeof parseFloat(n1))

// console.log(typeof(n1))
// console.log(Number.parseInt(n2))



// console.log("Number.MAX_VALUE : ",Number.MAX_VALUE)
// console.log("Number.MIN_VALUE",Number.MIN_VALUE)

// console.log("Number.MAX_SAFE_INTEGER",Number.MAX_SAFE_INTEGER)
// console.log("Number.MIN_SAFE_INTEGER",Number.MIN_SAFE_INTEGER)

// console.log(1/0)



// console.log("ABC" * 34)  // NaN -> Not a Number

// console.log(typeof(n1),typeof(n2),typeof(num2) , typeof(num2))

// var biggestNum = Number.MAX_VALUE;
// var smallestNum = Number.MIN_VALUE;
// var infiniteNum = Number.POSITIVE_INFINITY;
// var negInfiniteNum = Number.NEGATIVE_INFINITY;
// var notANum = Number.NaN;

// console.log(biggestNum , smallestNum)
// console.log(infiniteNum , negInfiniteNum , notANum)


// var n = 10344
// // var n = 10
// console.log(n.toPrecision(4))

// let numObj = new Number(10)
// console.log(typeof (numObj))  // object

// let num = numObj.valueOf()
// console.log(num)            // 10
// console.log(typeof (num))     // number




// Octal numbers start with "0" or "0o"
// var n = 0755; // 493
// var m = 0644; // 420
// var op = 0o10 //8
// console.log("\nDecimal values" , n , m , op)

// Binary Numbers
var b1 = 0b0101001
var b2 = 0B1001001
console.log("\nDecimal Values" , b1 , b2)


// Hexadecimal Numbers start with "0x" or "0X"
var hex1 = 0xA23F
var hex2 = 0XF
console.log("\nDEcimal Values" , hex1 , hex2)



// //Exponentiation
// console.log(1E3 , 2e6 , 0.2E3)


console.log(Number.isInteger(0));         // true
console.log(Number.isInteger(1));         // true
console.log(Number.isInteger(-100000));   // true
console.log(Number.isInteger(99999999999999999999999)); // true

// console.log(Number.isInteger(0.1));       // false
// console.log(Number.isInteger(Math.PI));   // false

// console.log(Number.isInteger(NaN));       // false
// console.log(Number.isInteger(Infinity));  // false
// console.log(Number.isInteger(-Infinity)); // false
// console.log(Number.isInteger('10'));      // false
// console.log(Number.isInteger(true));      // false
// console.log(Number.isInteger(false));     // false
// console.log(Number.isInteger([1]));       // false

// console.log(Number.isInteger(5.0));       // true
// console.log(Number.isInteger(5.000000000000001)); // false
// console.log(Number.isInteger(5.0000000000000001)); // true


// console.log(Number.EPSILON)
// //The EPSILON property has a value of approximately 2.2204460492503130808472633361816E-16, or 2-52.
// console.log(Number.isFinite(1 / 0));
// // expected output: false

// console.log(Number.isFinite(10 / 5));
// // expected output: true

// console.log(Number.isFinite(0 / 0));
// // expected output: false

// console.log(Number.isFinite(Infinity));  // false
// console.log(Number.isFinite(NaN));       // false
// console.log(Number.isFinite(-Infinity)); // false

// console.log(Number.isFinite(0));         // true
// console.log(Number.isFinite(2e64));      // true

// console.log(Number.isFinite('0'));       // false, would've been true with
//                                          // global isFinite('0')
// console.log(Number.isFinite(null));
// console.log(Number.isFinite(-345));

