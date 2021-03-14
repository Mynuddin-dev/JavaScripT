
// var x = "10" // Global variable -> its can be access anywhere ,anytime

// for (var i = 1; i <= x; i++){
//     var str=""
//     for (var j = 1; j <= i; j++){
//         str += x +" "  
//     }
//     console.log(str)
// }

// console.log(x)
// console.log("\n")




if (true) {
    if (true) {
        if (true) {
            var B = "Hello I am Mr.B"        //
            console.log(B)
        }
    }
}
console.log(B)
console.log("\n")


// "BUT"


var C = 1000

function X() {
    // var C = 3000
    function Y() {
        // var C = 2000
        console.log(C)
    }
    console.log(C)
    Y()
}
X()
console.log(C)
console.log("\n")




function test(n) {
    function A() {
        return n%3==0
    }
    function B() {
        return n%5==0
    }
    if (A() && B()) {
        console.log(n +" is divisable by 3 and 5")
    }
    else {
       console.log(n +"is not divisable by 3 and 5")

    }
}
test(15)