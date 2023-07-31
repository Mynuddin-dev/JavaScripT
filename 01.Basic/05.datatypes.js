/*
Primitive data type -> are defined by JavaScrift

        Number
        String
        Boolean
        Undefine
        Null
        bigint

//Object type -> user define data type

        Array
        Object
        function
 
There are 8 basic data types in JavaScript.

"number" :  for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
"bigint" : is for integer numbers of arbitrary length.
"string" : for strings. A string may have zero or more characters, there’s no separate single-character type.
"boolean": for true/false.

"null": for unknown values – a standalone type that has a single value null.
"undefined" : for unassigned values – a standalone type that has a single value undefined.

"object" : for more complex data structures.
"symbol" : for unique identifiers.
The latest ECMAScript standard defines nine types:

Six Data Types that are primitives, checked by typeof operator:
undefined : typeof instance === "undefined"
Boolean : typeof instance === "boolean"
Number : typeof instance === "number"
String : typeof instance === "string"
BigInt : typeof instance === "bigint"
Symbol : typeof instance === "symbol"

*/


// null vs undefine 
var toyBox = null; // The box is there, but it's intentionally empty.
var toyBoxs; // The box is there, but you haven't put any toys in it yet.
console.log(toyBox ,toyBoxs)


// NaN stands for "Not-a-Number" and is a special value in JavaScript used to represent the result of an operation that cannot be expressed as a valid number.

// Here are some key points about NaN:

// Invalid Operations: NaN is the result when you perform mathematical operations that involve non-numeric values or operations that cannot be represented as numbers.

// Data Type: NaN is a value of the number data type. It is considered a numeric value, but it is not a valid number.

// Propagating Nature: When any arithmetic operation involves NaN, the result will always be NaN. For example:

// javascript
// Copy code
// console.log(10 + "hello"); // Output: "10hello"
// console.log(10 - "hello"); // Output: NaN