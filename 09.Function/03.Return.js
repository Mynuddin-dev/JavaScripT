function Addall() {                             
    var sum = 0                              
       for (var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}

var Addresult1 = Addall(1, 2, 3, 4)
var Addresult2 = Addall(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log(Addresult1)
console.log(Addresult2)



function Person(Name, Email) {
    return {
        
        name : Name,
        email: Email
    }
    
    //here break the function
    console.log("This is not execute")
    //That means you must ruturn your "Return" Statement at the last of the function body 
    //if you write your some statement after "return" thats will not be execute
}

var p1 = Person("MD Mynuddin", "ddr.mdmynuddin@gmail.com")

console.log(p1)
console.log(typeof p1)