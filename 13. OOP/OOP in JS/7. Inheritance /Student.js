const Person = require("./Person")

class Student extends Person{
    constructor(name,email,subjects, tutionFee) {
        super(name,email) 
        this._subjects = subjects
        this._tutionFee =tutionFee
    }
    get subjects() {
        return this._subjects
    }

    get tutionFee() {
        return this._tutionFee
    }
    print() {
        console.log("Student")
        super.print()
        console.log(`Subjects: ${this._subjects},TutuionaFee: ${this._tutionFee}`) 
    }
}

module.exports = Student
