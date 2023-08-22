class Person{

    constructor(name,email) {  //Some other language like java, python doesnot have this constructor function. There class act like a constructor function
        this.name = name
        this.email = email

    }

    changeName(name) {
        this.name = name
    }

    sendEmail(msg) {
        console.log("To",this.email)
        console.log("Sending Email", msg)
    }
    // Method 1: Emthod inside class body

    print() {
        console.log(this) // here this means actually object
    }

    // print = () => {
    //     console.log(this)
    // }

    // print = function () {
    //     console.log(this)
    // }

    

   
}

const P1 = new Person("Mynuddin","mynuddin@gmail.com")
const P2 = new Person("Snowdown", "snow@gmail.com")
const P3 = new Person("Hillar", "hillari@gmail.com")

// P2.sendEmail("hello")

P3.print()

P1.changeName("Mynu")
P3.changeName("Hillari Tracat")

P1.print()
P2.print()
P3.print() 