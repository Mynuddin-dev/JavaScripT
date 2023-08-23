class Person{
    constructor(name, email) {  
        this._name = name
        this._email = email

    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value
    }
    
    print() {
        console.log(this + "") 
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

module.exports = Person
