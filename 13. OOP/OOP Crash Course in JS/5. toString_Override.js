// In JS Overload is not possible
class Person{

    constructor(name, email) {  
        
        // public by default

        // this.name = name
        // this.email = email

        // private convention

        this._name = name
        this._email = email

    }

    get name() {
        console.log("Actually this is a function call")
        return this._name.toUpperCase()
    }

    set name(value) {
        if(value==='Monu') return
        this._name = value
    }
    
    print() {
        console.log('Class:Person',this + "") 
    }

    // run this with comment and without comment
    toString() {
        return `_name: ${this._name} , _email: ${this._email}`
    }
}

const P1 = new Person("Mynuddin","mynuddin@gmail.com")
const P2 = new Person("Snowdown", "snow@gmail.com")
const P3 = new Person("Hillar", "hillari@gmail.com")

// console.log(P1.name)
// looks like property access but behind the seen it will call a function

// P1.name = "Monu"
P1.name = "Myn"
console.log(P1)
// Output: Person { _name: 'Myn', _email: 'mynuddin@gmail.com' }
// Ei text ta asche kotha theke kew na kew eitar jonno coe likhe rakhse
// Jekhane etar jonno code ta likhe rakhse etar nam hocche toString()
// toString() method k amra mader moto customize korte pari
// toString() method k console.log call kore na 
// jokhon amara ekta string concat or join korbo tokhon eta call hoy

console.log(P1 +"")
P1.print()
