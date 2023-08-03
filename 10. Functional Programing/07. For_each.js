var arr = [3, 2, 4, 5, 6]
sum = 0
arr.forEach(function (value, index, arr) {
    console.log(value,index,arr)
    sum += value 
    
})
console.log(sum)

console.log("\n My foreach function\n")

function myForEach(arr,cb) { // my callback function
    for (var i = 0; i < arr.length; i++){

        cb(arr[i],i,arr)
        // console.log(arr[i])
    }
}

summ = 0
myForEach(arr, function(value,index,arr) {
    console.log(value, index, arr)
    summ +=value
})

console.log(summ)


myForEach(arr, function (value, index, arr) {
    
    // arr[index] = value + 5
    arr[index] = value * 5

    
})

console.log(arr)

