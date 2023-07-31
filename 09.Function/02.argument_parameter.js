// Parameters are variables listed as a part of the function definition.
// Arguments are values passed to the function when it is invoked.

// or

// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function


// function mul(a, b) {              //parameter
//     console.log(a * b)
    
// }

// mul(2,3)                          // argument
// mul(6,5)
// mul(10, 20)

// function add(a, b) {
//     console.log(a + b)
    
// }

// add(2,3)
// add(6,5)
// add(10, 20)


arr1 = [1, 2, 3]
arr2 = [4, 5, 6 , 5]
arr3 = [7, 8, 9 , 7]

// var sum1 = 0
// for (var i = 0; i < arr1.length; i++){
//     sum1 += arr1[i]
// }
// console.log(sum1)

// var sum2 = 0
// for (var i = 0; i < arr2.length; i++){
//     sum2 += arr2[i]
// }
// console.log(sum2)

// var sum3 = 0
// for (var i = 0; i < arr3.length; i++){
//     sum3 += arr3[i]
// }
// console.log(sum3)


// function SumOfArray(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++){
//     sum += arr[i]
//     }
//     console.log(sum)
// }

// SumOfArray(arr1)
// SumOfArray(arr2)
// SumOfArray(arr3)

// console.log("\n")


// // function test(a, b, c) {                   //copy and goto browser and paste it

// function test() { 
//     console.log(arguments)                 // arguments just like an object
//     // console.log(typeof a)
//     for (var i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }

// test(10, 20, 30)


// console.log("\n")



function Addall() {                              //Being argument . we use it when we dont know how much argument pass
    var sum = 0                              
       for (var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

Addall(1, 2, 3, 4)
Addall(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
