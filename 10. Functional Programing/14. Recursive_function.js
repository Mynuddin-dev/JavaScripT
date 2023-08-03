// Basic recursive function


function SayHi(n) {
    if (n == 0) { // Base case: Recursion stops here when n becomes 0
        return 1
    }
    console.log("Hi, I am Calling")
    SayHi(n-1)
}
SayHi(5)

function sum(n) {
    if (n == 0) {
        return 0
    }

    return n + sum(n - 1)
    
}
console.log(sum(4))


function fact(n) {
    if (n == 1) {
        return 1
    }

    return n * fact(n - 1)
    
}
console.log(fact(5))

var arr = [1, 2, 3, 4, 5]
function sumofArray(arr, lastindex) {
    if (lastindex < 0) {
        return 0
    }
    return arr[lastindex]+sumofArray(arr,lastindex-1)
}

console.log(sumofArray(arr,arr.length-1))