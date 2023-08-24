class Person{

    static classname = "PERSON"
    static PI = 3.1416


    constructor(name, email) {  
        
        // public by default

        // this.name = name
        // this.email = email

        // private convention

        this._name = name
        this._email = email

    }

    get name() {
        // console.log("Actually this is a function call")
        return this._name.toUpperCase()
    }

    set name(value) {
        // if(value==='Monu') return
        this._name = value
    }
    
    print() {
        console.log('Class:Person',this + "") 
    }

    // run this with comment and without comment
    toString() {
        return `_name: ${this._name} , _email: ${this._email}`
    }

    static isValid(age) {
        return age>=18
    }

    static isEqual(P1, P2) {
        if (P1.name !== P2.name) return false
        if (P1.email !== P2.email) return false
        
        return true
    }
}

const P1 = new Person("Mynuddin","mynuddin@gmail.com")
const P2 = new Person("Snowdown", "snow@gmail.com")
const P3 = new Person("Hillar", "hillari@gmail.com")

// console.log(P1.name)
// looks like property access but behind the seen it will call a function

// P1.name = "Monu"
// P1.name = "Myn"
// console.log(P1)
// Output: Person { _name: 'Myn', _email: 'mynuddin@gmail.com' }
// Ei text ta asche kotha theke kew na kew eitar jonno coe likhe rakhse
// Jekhane etar jonno code ta likhe rakhse etar nam hocche toString()
// toString() method k amra mader moto customize korte pari
// toString() method k console.log call kore na 
// jokhon amara ekta string concat or join korbo tokhon eta call hoy

// console.log(P1 +"")
// P1.print()



//---------------> Static Part <---------------

// const P4 = { _name:"Test" , _email:'test@gmail.com'}

// console.log(P1 instanceof Person)
// console.log(P4 instanceof Person)

// i want to get "classname" property of Person without object 
// For that we use Class Name (for getting static property)

// ekta class er static property or method er access er jonno 
// amra direct class er name use korbo

console.log(Person.PI)
console.log(Person.classname)

const testUser = {
    name: "Test",
    email: "test@gmail.com",
    age: 25
    // age:15
}

let P5 = null
if (Person.isValid(testUser.age)) {
    P5 = new Person(testUser.name , testUser.email)
}
console.log(P5)

const P6 = new Person("Hillar", "hillari@gmail.com")

console.log(Person.isEqual(P1, P6))
console.log(Person.isEqual(P3,P6))