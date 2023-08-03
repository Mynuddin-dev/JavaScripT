var arr = [12, 23, 43, 45, 32, 13, 14, 15]
var Find_result = arr.find(function (value) {
    return value==45
})
console.log(Find_result)

// ekhon kotha hocche 45 khuztechi 45 diye eta to evabe korar mane ki 
// suppose i have 100 object and if i want to find all about an employee then i can find it by ID
// thats why we use it . In different case we can use it

var Find_Index_result = arr.findIndex(function (value) {
    return value==45
})
console.log(Find_Index_result)

// function myfind(arr) {
//     find=45
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] == 45) {
//             return arr[i]
//         }
//     }
// }
// console.log(myfind(arr))

function myfind(arr , cb) {
    for (i = 0; i < arr.length; i++){
        if (cb(arr[i])) {
            // return arr[i]
            return i
        }
    }
}
console.log(myfind(arr,function (value) {
    return value == 45
    
}))