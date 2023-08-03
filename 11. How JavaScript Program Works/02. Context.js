// Jei Context er upor base kore ekta file ba program run hbe seta hoilo: Global Context
// Context means container
// In real life Object

// Phase 1: Creating a Context
// Phase 2: Execution a context

function a(){
    b()
    console.log("I am function A")
}

function b(){
    d()
    console.log("I am function B")
}

function c(){
    console.log("I am function C")
}

function d(){
    c()
    console.log("I am function D")
}

// first store all function not execute without invoke

var x = 100
a()

//Execution of c function context
//Execution of d function context
//Execution of b function context
//Execution of a function context
// Execution of global context
// Last in First out
console.log("I am a global")

// full program ta global context 

// Phase 1: Creational Context
// Phase 2: Executional Context 

var x // phase 1
x = 100

// function e khetre ref store korbe

// then everything store in a global context as an object
// phase 2 start(execution)

// sobar jonno age context create hbe then exectuion hbe 
