const Employee = require('./Employee')

const _subject  = Symbol('Subject')
class Teacher extends Employee{
    constructor(id, name , subject) {
        super(id, name)
        this[_subject] = subject

    }

    get subject() {
        return this[_subject]
    }

    set subject(value) {
        this[_subject] = value
    }

    toString() {
        return `${super.toString()} , Subject: ${this[_subject]}`
    }
}

module.exports = Teacher