// JS compiler/engine tokenize everything first : the way we called lexi
// When JS engine tokenize a code or program, instantly its define the scope 
// That means kar scope ki hbe eta define hoye jay Thats it.

{ // Global scope

    var x = 55

    function test()
    {
        // var x = 45
        // console.log(x)

        function nested()
        {
            var y = 65
            console.log(x)
        }

        // console.log(y) //error
        nested()
    }
        
    test()

}