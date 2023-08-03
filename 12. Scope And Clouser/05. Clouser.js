// Function able to remember and access its lexical scope
// when that function executing outside its lexical scope

// function test() {
//     var msg = "I am Learning Lexical Scope and Closure"
//     function sayMSG() {
//         console.log(msg)

//     }
//     sayMSG()
// }
// test()


function test()
{
    var msg = "I am Learning Lexical Scope and Closure"
    return function ()
    {
        console.log(msg)

    }
}

var sayMSG = test()
sayMSG()