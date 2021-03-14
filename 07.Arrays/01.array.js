//An array in JavaScript can be defined and initialized in two ways, array literal and Array constructor syntax.


//array literal 
//var <array-name> = [element0, element1, element2,... elementN];


var ar = [11, 22, 33, 44, 55, 66]
console.log(ar)
console.log("length = " +ar.length)
console.log(ar[0])
console.log(ar[5])

ar[6] = 34
ar[11] = 65
console.log(ar)
console.log(ar[8])
console.log("lenght = "+ar.length)

ar[11] = 69
console.log(ar)

console.log("\n")

var stringArray = ["one", "two", "three" ,"25" ,"85"];
console.log(stringArray)
var numericArray = [1, 2, 3, 4];
console.log(numericArray)
var decimalArray = [1.1, 1.2, 1.3];
console.log(decimalArray)
var booleanArray = [true, false, false, true];
console.log(booleanArray)

var mixedArray = [99, "two", "three", 4 ,"58" , 54.6544 , "6564.1646"];
console.log(mixedArray)



console.log("\n")
//Please note that array can only have numeric index (key). Index cannot be of string or
//any other data type.


//Array Constructor Syntax
//var arrayName = new Array();

// var arrayName = new Array(Number length);

// var arrayName = new Array(element1, element2, element3,... elementN);

var house = new Array(10, 20, 30, 40, 50)
console.log(house)

var ar1 = new Array()
console.log(ar1)

var ar2 = new Array(7)
console.log(ar2)

ar2[0] = "Hello"
ar2[1] = [69, "s"]
ar2[2] = 34.4
ar2[3] = 453
ar2[4] = 'Brother'
ar2[5] = [34, 23, 32.12, "ninjacode"]
console.log(ar2)

ar2[1] = 69
ar2[5] = "ninjacode"
console.log(ar2)

console.log("\n")


console.log(ar2.length)
for (var i = 0; i < ar2.length ; i++) 
{
    console.log(ar2[i])
}

/*

Points to Remember :
An array is a special type of variable that stores multiple values using a special syntax.
An array can be created using array literal or Array constructor syntax.
Array literal syntax: var stringArray = ["one", "two", "three"];
Array constructor syntax:var numericArray = new Array(3);
A single array can store values of different data types.
An array elements (values) can be accessed using zero based index (key). e.g. array[0].
An array index must be numeric.
Array includes length property and various methods to operate on array objects.

*/


