

var point = {
    Math: 90,               
    English : 39,
    Physics: 78,
    Chemestry : 80
}



// Accessing Object Property
//-------------------------------


// .(dot Notation) 
// objectName.propertyName

console.log(point.Math)   
console.log(point.Physics)
console.log("Avarage Number: "+((point.Math + point.Physics + point.English + point.Chemestry)/4))

var show = "Math"
console.log(point.show)
console.log(point[show])
console.log(point)


//Array Notation
//objectName["propertyName"]

console.log(point["Math"])
console.log(point["Chemestry"])
console.log(point["English"])
console.log("Avarage Number: " +(point["Math"] + point["Chemestry"] + point["English"] + point["Physics"])/4)

console.log(point)
