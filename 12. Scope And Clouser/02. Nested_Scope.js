
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



{
    function outerFunction()
    {
        var outerVar = "I am in the outer function";
      
        function innerFunction()
        {
          var innerVar = "I am in the inner function";
          console.log(innerVar); // Output: "I am in the inner function"
          console.log(outerVar); // Output: "I am in the outer function"
        }
      
        innerFunction();
        console.log(outerVar); // Output: "I am in the outer function"
      }
      
      outerFunction();
      
}