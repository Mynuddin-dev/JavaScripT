var arr = [2, 4, 5, 6, 9, 8, 7, 2, 1, 3]

// filter function return boolean 

var filteredArr = arr.filter(function (value, index, arr) {
    return value % 2 == 0
    
})
console.log(filteredArr)



// --------------- my style ------------------------ 

// function myfilter(arr) {
//     filteredArr=[]
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] % 2 == 0) {
//             filteredArr.push(arr[i])
//         }
        
//     }
//     return filteredArr
// }

// var even = myfilter(arr)
// console.log(even)

function myfilter(arr,cb) {
    filteredArr=[]
    for (i = 0; i < arr.length; i++){

        if (cb(arr[i], i, arr)) {
            
            filteredArr.push(arr[i])
        }
         
    }
    return filteredArr
}

console.log(myfilter(arr, function (value) {
    if (value % 2 == 0) {
        return value
    }
}))


console.log(myfilter(arr, function (value) {
    if (value % 2 != 0) {
        return value>4
    }
}))
