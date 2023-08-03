{
    var a = 11
    function A()
    {
        var b = 12
        function B()
        {
            var c = 23
            console.log(c)
        }
        function C()
        {
            var d = 56
            console.log(d)
        }
        console.log(b)
        D()
        B()
        C()
    }
    
    function D(n)
    {
        return n*2
    }
}

// scope chain 

// A = a,b,B(),C(),D()
// B = a,b,c , B(),C(),D(),A()
// C = a,b,d , B(),C(),D(),A()
// D = a , n , A()