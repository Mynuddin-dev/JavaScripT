// Class as usual containe property and method 

class Person{

    constructor(name,email) {  //Some other language like java, python doesnot have this constructor function. There class act like a constructor function
        this.name = name
        this.email = email
        // console.log(this)

    }

    changeName(name) {
        this.name = name
    }

    sendEmail(msg) {
        console.log("To",this.email)
        console.log("Sending Email", msg)
    }

    // when use function in class its called method
    // Method 1: method inside class body using regular function
    print() {
        console.log(this) // here this means actually object
    }


    // Method 2: method inside class body using arrow function (not recommended)
    // print = () => {  // not recommended to use
    //     console.log(this)
    // }

    // Method 3: method inside class body using function expression
    // print = function () {
    //     console.log(this)
    // }

    

   
}

const P1 = new Person("Mynuddin","mynuddin@gmail.com")
const P2 = new Person("Snowdown", "snow@gmail.com")
const P3 = new Person("Hillar", "hillari@gmail.com")

P2.sendEmail("hello")
P3.print() 
P1.changeName("Mynu")
P3.changeName("Hillari Tracat")
P1.print()
P2.print()
P3.print() 