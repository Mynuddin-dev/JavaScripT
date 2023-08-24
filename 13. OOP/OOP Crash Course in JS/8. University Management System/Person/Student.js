const UniPerson = require('./UniPerson')

const _studentId = Symbol('Student')
const _Gaurdian = Symbol('Gaurdian')
const _exams = Symbol('Exams')
const _tutionFee = Symbol('TuitionFee')


class Student extends UniPerson{
    constructor(id, name , studentId , Gaurdian) {
        super(id, name)
        this[_studentId] = studentId
        this[_Gaurdian] = Gaurdian
        this[_exams] = []
        this[_tutionFee] = null
    }

    get studentId() {
        return this[_studentId]
    }

    get Gaurdian() {
        return this[_Gaurdian]
    }

    get exams() {
        return this[_exams]
    }

    set exams(value) {
        this[_exams] = value
    }

    addExam(exam) {
        this[_exams].push(exam)
    }

    get tutionFee() {
        return this[_tutionFee]
    }

    set tutionFee(value) {
        this[_tutionFee] = value
    }

    toString() {
        return `$super.toString()} , StudentId: ${this[_studentId]}`
    }



}

module.exports = Student