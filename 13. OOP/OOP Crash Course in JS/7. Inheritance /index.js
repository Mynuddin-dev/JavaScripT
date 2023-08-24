// import classes
const Person = require("./Person")
const Student = require("./Student")
const Teacher = require("./Teacher")

const P = new Person("Abul Mia", 'abulmia@gmail.com')
const T = new Teacher("HM Nyem","hmnyem@gmail.com","Computer Fundamentals", 40000)
const S = new Student("Mynuddin","mynu@gmail.com",["Data Science" , 'Operating System' , 'Applied ML'], 200000)

// T.name = "Jhankar Vai"
// console.log(T.name)
// console.log(T)
// console.log(T instanceof Teacher)
// console.log(T instanceof Person)

//  trying to create an instance of the Person class using the T instance (which is an instance of the Teacher class) by assigning the T instance to P2.
// const P2 = new Person(T.name, T.email); // Correct way to create a new instance
// console.log(P2)


// console.log(S)
S.print()
T.print()

console.log(P)
console.log(T)
console.log(S)
