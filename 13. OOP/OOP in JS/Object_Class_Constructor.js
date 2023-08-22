// Raw Object 
// const person = {}
// person.name = "Mynuddin"
// person.email = "mynu@gmail.com"
// console.log(person)
// console.log(typeof person)



// class Person{
    
// }
// const p1 = new Person()
// p1.name = "Mynuddin"
// p1.email = "mynu@gmail.com"
// console.log(p1)

// const p2 = new Person()
// p2.email = "mmynu@gmail.com"
// p2.name = "MMynuddin"
// console.log(p2)



// class Person{
//     name = "Mynuddin"
//     email = "mynu@gmail.com"
// }
// const p1 = new Person() // Person() is like a function 
// const p2 = new Person() // behind the seen its called the constructor function
// console.log(p1)
// console.log(p2)



// class Person{
//     name = "Mynuddin"
//     email = "mynu@gmail.com"

//     constructor() {
//         console.log("Calling Constructor")
//     }
// }
// const p1 = new Person() 
// const p2 = new Person()
// p2.name = "Hello"
// p2.email = 'hello@gmail.com'
// console.log(p1)
// console.log(p2)



// Ultimate finding
class Person {
    constructor(name, email) {  
        this.name = name
        this.email = email
        console.log(this) // this means this or sending object
    }
}
const P1 = new Person("Mynuddin","mynuddin@gmail.com")
const P2 = new Person("Snowdown", "snow@gmail.com")
const P3 = new Person("Hillar", "hillari@gmail.com")
// console.log(P1)
// console.log(P2)
// console.log(P3)
