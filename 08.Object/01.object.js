// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
//A property's value can be a function, in which case the property is known as a method

// Create Object Literal

var obj = {}
console.log(obj)
console.log(typeof (obj))

obj.x = 34
console.log(obj)
obj.y = 54
console.log(obj)

var Pk = {
    A: 23,
    B: 45
    
}
console.log(Pk)

Pk.C = 99
Pk["D"] = 100

console.log(Pk)


var point = {
    Math: 90,               // key : value pair or Propertise and value
    English : 39,
    Physics: 78,
    Chemestry : 80
}

console.log(point)

//Objects are variables too. But objects can contain many values.

var car = {
    type: "Fiat",
    model: "500",
    color: "white",
    weight : "1250kg"
}

console.log(car)


//we also know details about "Object" in OOP

// Create Object : Constructor

var obj1 = Object()
obj1.a = 21
obj1.b = 23
obj1.c = 25
console.log(obj1)

var obj2 = new Object()
obj2.aa = 21
obj2.bb = 23
obj2.cc = 25
console.log(obj2)
