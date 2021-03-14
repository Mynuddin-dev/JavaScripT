
var obj1 = {
    a: 20,
    b: 30
}

var obj2 = {
    a: 20,
    b: 30
}
console.log(obj1, obj2)

console.log(obj1 == obj2)    //  memory location difference
console.log(obj1 === obj2)


//must be same property same value

if (obj1.a == obj2.a && obj1.b == obj2.b) {
    console.log(true)
}else{
    console.log(false)
}


//another easy way
//JSON => JavaScript Object Notation

console.log(obj1)
console.log(obj2)
console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))


