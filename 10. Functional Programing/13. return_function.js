function greet(msg) {
    function greeting(Name) {
        return msg + " , "+ Name + "!"
    }
    return greeting
}

var gm = greet("Good Morning")
// console.log(gm)
// console.log(typeof gm)

var msg = gm("Mynuddin")
var gn = greet("Good Night")
var hello = greet("Hello")

console.log(msg)
console.log(gn("Hasa Saed"))
console.log(hello("Shanto"))


function base(b) {
    return function (n) {
        var result = 1
        for (var i = 0; i < b; i++){
            result *= n
            
        }
        return result
    }
    
}

var base2 = base(10)
console.log(base2(2)) //2^10

var base5 = base(5)
console.log(base5(3)) // 3^5