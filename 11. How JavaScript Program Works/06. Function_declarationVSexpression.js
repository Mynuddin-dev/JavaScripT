abc()

function abc() { // function declaration
    console.log("I am a function")
}

// newABC()// get an error as a variable it undefine

var newABC = function () { // function expression
    console.log("I am new ABC Function")
}

newABC() // Perfectly it will work

// Creational Phase
// abc = Reference
// newABC = undefine

// normally function jkono jayga theke call kora jay 
// But Function expression e i mean jdi variable e store
// thake taile jkono somoy na store korar por execute hbe.Age dile error hbe
