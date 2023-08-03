// (2nd function output) as an input => first function  that is function compositions

function print(inp) {
    console.log(inp)
}

function multiplybyFive(n){
    return n*5
}

function add(a, b) {
    return a + b
    
}

print(multiplybyFive(add(3, 2)))
