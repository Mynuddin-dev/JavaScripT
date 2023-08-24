const Person = require('./Person')

const _profession = Symbol('profession')
const _income = Symbol('income')

class Gaurdian extends Person{
    constructor(id,name,profession,income) {
        super(id, name)
        this[_profession] = profession
        this[_income] = income
    }

    get profession() {
        return this[_profession]
    }

    set profession(value) {
        this[_profession] = value
    }
    
    get income() {
        return this[_income]
    }
    
    set income(value) {
        this[_income] = value
    }

    toString() {
        
        return `${super.toString()}, Profession : ${this[_profession]} , Income : ${this[_income]}`

    }
}

module.exports = Gaurdian