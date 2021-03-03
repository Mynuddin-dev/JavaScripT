var str = "10000"
var nm = 500
var n1 = str + nm   // auto type convert in string
var n2 = str * nm   // auto type convert in number
var n3 = str / nm   // auto type convert in number
var n4 = str - nm   // auto type convert in number

console.log(Number(str))
console.log(typeof(str),typeof(nm) , typeof(n1) , typeof(n2) , typeof(n3),typeof(n4))
console.log(str , nm , n1 , n2  , n3  , n4)


var n = 10
console.log(Number.parseInt(str),typeof(str))
console.log(n.toString(),typeof(n))

// finally here is the convert
var str1 = Number.parseInt(str)
var nn = n.toString()

console.log(str1,typeof(str1))
console.log(nn.toString(),typeof(nn))

console.log(Number(Infinity))
console.log(String(Infinity))
console.log(Boolean(Infinity))
console.log(Number(-Infinity))



/*
Falsy values
--------------

""  , ''  , ``
0
null
NaN
Undefine

*/

console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean("This is a Text"))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(7894734))

var x = true
console.log("\n\n"+x , typeof(x))
console.log(x.toString() , typeof(x))
var y = x.toString()
console.log(y , typeof(y))


var value = true
console.log(typeof(value)) // boolean

value = String(value) // now value is a string "true"
console.log(typeof(value)) // string

