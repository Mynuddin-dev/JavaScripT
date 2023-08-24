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
        console.log(this) // here this means actually object
    }
}

const P1 = new Person("Mynuddin","mynuddin@gmail.com")
const P2 = new Person("Snowdown", "snow@gmail.com")
const P3 = new Person("Hillar", "hillari@gmail.com")

console.log(P1.name)
// looks like property access but behind the seen it will call a function

// P1.name = "Monu"
P1.name = "Myn"
console.log(P1.name)

P1.print()
