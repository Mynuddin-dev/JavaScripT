// For each orginal array k modify kore
// Where Map notun ekta arra toiri kore orginal theke
// Array ta k traverse kore modify kore notun array banay

var arr = [1, 2, 3, 4, 5]

var squarr = arr.map(function (value, index, arr) {
    return value**2
})

console.log(arr)
console.log(squarr)

function mymap(arr, cb) {
    newArray=[]
    for (i = 0; i < arr.length; i++){
        var temp =  cb(arr[i],i,arr)
        newArray.push(temp)
       
    }
    return newArray
}

var NoyaArray = mymap(arr, function (value, index, array) {
    return value**2
})
var mten = mymap(arr, function (value, index, array) {
    return value*10
})
console.log(arr)
console.log(NoyaArray)
console.log(mten)