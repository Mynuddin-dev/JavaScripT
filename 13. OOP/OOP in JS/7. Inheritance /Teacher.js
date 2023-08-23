const Person = require("./Person")

class Teacher extends Person{
    constructor(name, email, subject, Salary) {
        super(name,email) 
        //super() : parent class er constructor call hbe
        // chaile jeta dorkar setao ana jabe like super.'what you want'
        this._subject = subject
        this._Salary = Salary
        
    }
    get subject() {
        return this._subject
    }

    get Salary() {
        return this._Salary
    }

    print() {
        console.log('Teacher')
        super.print()
        console.log(`Subject: ${this._subject}, Salary: ${this._Salary}`) 
    }
}

module.exports = Teacher