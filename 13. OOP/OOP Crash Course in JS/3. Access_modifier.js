// An access modifier is a keyword that we can apply to a member(property) of a class to control its access from the outside.

// public : When you want to access the members Everywhere in the class
// private: when you want to access the members only inside the class.
// protected: when you want to access the members inside the class and its subclasses.


// But In JavaScript, unlike some other programming languages such as Java or C#, there are no built-in access modifiers like "public," "private," or "protected" to control the visibility of properties or methods within a class. By default, all properties and methods of a class are accessible from outside the class. This means that everything you define within a class is effectively public.

// Shortly: Access Modifier => Amar class er property kothay access korte dibo and kothay dibo na.JavaScript e kono access modifier nai lke public, private, protected, jgula onno language e ache like java te ache. 
// So by default javascript e sobkichui public. Taile amra access modifier kivabe use korbo ? amra kichu pattern , techniques or convention use korbo.

// However, you can achieve encapsulation and control access to properties and methods through various techniques, conventions, and patterns. Here are some common approaches used in JavaScript to emulate access modifiers:


class Person{

    constructor(name, email) {  
        
        // public by default

        // this.name = name
        // this.email = email

        // private property convention

        this._name = name
        this._email = email

    }

    // how can i get the private properties?
    getName() {
        return this._name
    }

    setName(name) {
        this._name = name
    }

    getEmail() {
        return this._email
    }

    setEmail(email) {
        this._email = email
    }

    sendMail(msg) {
        console.log('To:', this._email)
        console.log('MSG:',this._sanitizeMsg(msg))
    }

     //private method convention
    _sanitizeMsg(msg) {
        return msg.trim().toLowerCase()
    }
    
    print() {
        console.log(this) // here this means actually object
    }
}

const P1 = new Person("Mynuddin","mynuddin@gmail.com")
const P2 = new Person("Snowdown", "snow@gmail.com")
const P3 = new Person("Hillar", "hillari@gmail.com")

console.log(P1.getName(), P1.getEmail())

// how can i update ?
// P1._name = "Changed Name" // i have no right to access _name because its private properties. SO we dont follow this way

P1.setName("SettingName")
P1.setEmail("SettingEmail@gmail.com")
console.log(P1.getName(), P1.getEmail())
P1.sendMail("       Wow Sanitized Methods Working")