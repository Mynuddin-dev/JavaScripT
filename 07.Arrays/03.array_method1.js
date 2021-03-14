var array =[11, 22, 33, 44, 55, 66]
console.log(array)


// Add an item to the end of an Array
array.push(99)
console.log(array)


// Remove an item from the end of an Array
array.pop(99)
console.log(array)


//Remove an item from the beginning of an Array
array.shift()
console.log(array)

//Add an item to the beginning of an Array
array.unshift(11)
console.log(array)


//Find the index of an item in the Array
console.log(array.indexOf(44))


//remove and add elment specific position
//splice(start: number, deleteCount?: number): number[]
array.splice(3, 0, 87 , 78)  // index(where to start remove or add) , number of elmnt remove , adding value
console.log(array)


//Remove an item by index position
array.splice(3, 2)
console.log(array)

console.log("\n")

//keys
console.log(Object.keys(array))


var x = [21, 45, 78, 65, 89]
console.log(x) 

console.log(x.join(" "))  // return a string
console.log(x.join(" | "))
console.log(x.join(" , "))

console.log(x.fill(true))
console.log(x.fill(0))
console.log(x.fill(12))



var y1 = [72, 47, 65, 27]
var y2 = [32, 46, 76, 98]
var y3 = [45,54,23,32,12,67]

console.log(y1.concat(y2))
console.log(y2.concat(y1))
console.log(y1.concat(y2 , y3))                             //merging 3 array




console.log(Array.isArray(y2))

var xx = Array.from(y1)
console.log(xx)

var a = [1, 2]
// var b = a                //i think its called deep copy and shallow copy in python
var b = Array.from(a)
console.log(a)
b[0]=5
console.log(a)




var t = ["This", "Is", "Breaking", "Bad", "Series"]
console.log(t)
console.log(t.toString()) // toString() converts an array to a string of (comma separated) array values.








console.log("\n")

// play with  length
// If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:
let arr = [1, 2, 3, 4, 5]
arr.length = 2 // truncate to 2 elements
console.log( arr ) // [1, 2]

arr.length = 5 // return length back
console.log( arr[3] ) // undefined: the values do not return
console.log(arr)



const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length)

fruits[5] = 'mango'
console.log(fruits[5])                    // 'mango'
console.log(Object.keys(fruits))          // ['0', '1', '2', '5']
console.log(fruits.length)

fruits.length = 10
console.log(fruits)                     // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits))        // ['0', '1', '2', '5']
console.log(fruits.length)              // 10
console.log(fruits[8])

console.log("\n")
delete fruits[0]                       //delete just value not the place
console.log(fruits)