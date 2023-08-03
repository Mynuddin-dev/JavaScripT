var arr = [1, 2, 3, 4, 5]
var sum = arr.reduce(function (previous, current, Current_index, array) {
    return previous + current

})

// previous / initial value arr[0]
// If intial value specified arr[0] then current value arr[1]

var max = arr.reduce(function (previous, current) {
    return Math.max(previous, current)

})

console.log(sum)
console.log(max)



// function myreduce(arr) {
//     sum = 0
//     for (i = 0; i < arr.length; i++){
//         sum = sum + arr[i]
//     }

//     return sum

// }

// console.log(myreduce(arr))

console.log("\n")


function myreduce(arr, cb, initial_value) {

    for (i = 0; i < arr.length; i++) {
        initial_value = cb(initial_value, arr[i])
    }

    return initial_value

}

console.log(myreduce(arr, function (pre, curr) {
    return pre + curr

}, 0))

console.log(myreduce(arr, function (pre, curr) {
    return Math.max(pre, curr)

}, arr[0]))

console.log(myreduce(arr, function (pre, curr) {
    return Math.min(pre, curr)

}, arr[0]))