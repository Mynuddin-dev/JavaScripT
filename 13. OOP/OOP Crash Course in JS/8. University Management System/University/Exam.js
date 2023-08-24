const _id = Symbol('id')
const _name = Symbol('name')
const _subject = Symbol('subject')
const _passMark = Symbol('passMark')

class Exam{
    constructor(id, name, subject, passMark) {
        this[_id] = id
        this[_name] = name
        this[_subject] = subject
        this[_passMark] = passMark || 33
    }

    get id() {
        return this[_id]
    }

    get name() {
        return this[_name]
    }

    set name(value) {
        this[_name] = value
    }

    get subject() {
        return this[_subject]
    }

    set subject(value) {
        this[_subject] = value
    }

     get passMark() {
        return this[_passMark]
    }

    set passMark(value) {
        this[_passMark] = value
    }

    toString() {
        return `
        ID: ${this[_id]}
        Name: ${this[_name]} ,
        Subject: ${this[_subject]},
        PassMark: ${this[_passMark]}`
    }
}

module.exports = Exam