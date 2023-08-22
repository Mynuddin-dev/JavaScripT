￼
# Getting to Know Object-Oriented Programming (OOP)

## From Procedural to Structured Programming

Before the concept of Object-Oriented Programming (OOP) emerged, developers used a procedural way to write code. In procedural programming, the focus is on writing procedures or functions that perform specific tasks. These procedures manipulate data and are organized in a linear fashion. The program's logic revolves around executing these procedures one after another, with data often shared globally.

### Procedural Programming:
- Data and Function: Data and functions are separate entities. Functions act on data and can modify it, leading to a global data space where data is accessible from anywhere in the program.
- Global Scope: This approach can lead to unintended side effects and make the code harder to understand and maintain.
- Complexity: As programs grew larger and more complex, managing data and ensuring its integrity became challenging. Code could become difficult to maintain and debug due to its sprawling nature.

## The Emergence of OOP

### Introducing `struct`:

To address some of the issues in procedural programming, the concept of `struct` emerged. It allowed for grouping common data together, and you could create multiple user objects as needed. However, this approach had its limitations and challenges.

### The Challenges:
- Code Reusability: The code was not very reusable, leading to duplication.
- Managing Complexity: Large codebases were hard to manage, trace, and debug.
- Exposed Data: Data was exposed to the entire program (global scope).
- Priority of Operations: In many cases, operation priorities were given higher importance than data integrity.
- Real-World Relation: It was often difficult to relate code structures with real-world entities and data.

## 1. Introducing Object-Oriented Programming (OOP):

Programming is like giving instructions to a computer to perform tasks. As your programs become more complex, organizing and managing your code becomes important. That's where Object-Oriented Programming (OOP) comes in!

OOP is a way of writing computer programs by organizing your code into reusable pieces called "objects." These objects represent real-world things or concepts, and they have both data (attributes) and behaviors (methods). OOP allows you to model and solve complex problems in a more structured and organized manner.

### Key Concepts of OOP:

- **Class:** A class is like a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that class will have. For example, if you have a class called "User," it might have attributes like "name", "email", "password" and "username". 

<div style="display:flex; justify-content:center;">
  <img src="https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/Class.png" alt="Class and Object" width="30%" style="margin: auto 0;" />
  <img src="https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/Constructor.png" alt="Class and Object" alt="Image 2" width="30%"/>
  <img src="https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/Object.png" alt="Class and Object" alt="Image 3" width="30%"/>
</div>

"Now, let's explore how we pass data into a class. We achieve this using a special function called the 'constructor.' In some cases, the constructor shares the same name as the class itself. When an object is created from a class, the constructor is automatically invoked, initializing the object's properties."

***Now User is a template or class or constructor function***

***Each time we call User(Constructor function or class or template), a new user will be created***

```
const User1 = new User(data like name,email,password,username)
const User2 = new User(data like name,email,password,username)
const User3 = new User(data like name,email,password,username)
```

Here User1, User2, and User3 is the object and they can access all properties, and methods to their belonging class.

- **Object:** An object is an instance created from a class. If a class is a blueprint, an object is a specific realization of that blueprint. You can create multiple objects from the same class, each with its own unique data, like user1, user2...(contain actual data)

- **Attributes:** Attributes are the characteristics or properties of an object. For instance, a "User" object might have attributes like "name", "email", "password" and "username".

- **Methods:** Methods are the functions or actions that an object can perform. For our "User" example, methods could include "create user", "login", "logout", and "reset password."

### Still confused? Here is the clarification:

Let's another Example a **Car** can be a template or class. 

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/Car%20example.png)


#### Methods: When a function is used in a class then we can call it a method.
  - Private: Used under the class(Helper method). The object has no Private method.
  - Public: Access by class object

#### Summary
  - An object combination of Noun, Adjective, and verb.
  - A Capsule that can encapsulate data and operations.
  - Has some private and public properties.
  - Has some function called methods.
  - Is a custom Data Type
  - An Isolated environment for properties and methods.

With the foundation of OOP, you can create more organized, reusable, and manageable code. Each object encapsulates data and behavior, making your code easier to understand and maintain.

Remember, OOP is a powerful paradigm that can greatly enhance your programming skills and open doors to building more complex and robust software systems.



## 2.Main piller of OOP

1. **Abstraction:** Hiding implementation details inside and providing just the necessary API. We never know how it works, we only know what to do just like a built-in function.

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/buitin.png)

Abstraction is like using a TV remote without needing to understand the inner workings of the TV. It allows you to focus on what something does, rather than how it does it. In programming, it means hiding complex implementation details and providing a simpler interface.

**Example:** Think about remote control for a toy car. You press buttons to make the car move, but you don't need to know how the car works inside. Abstraction is like that remote control. It lets you use things without worrying about how they're made. You only need to know what buttons to press to make things happen.

**2.  Encapsulation:** To perform abstraction perfectly, we need encapsulation. This is the way to achieve abstraction. Encapsulation is about putting similar things (data and functions) together in a box called a "class." This keeps things organized and prevents anyone from messing with them in the wrong way.

**Example:**, Imagine you have a special toy box that only you can open. Encapsulation is like that toy box. It's a way to put your toys (data) and the instructions to play with them (methods) together in a safe box (class). This helps keep your toys organized and only lets others play with them the right way, without messing them up.

**3. Inheritance:** This is a fundamental concept that promotes **code reusability, avoids duplicity and efficiently extends the capabilities of existing code.** by enabling a class to inherit the properties and behaviors of another class. It's akin to passing down traits from parents to children. In the world of programming, it means that a new class can acquire and build upon the attributes and functionalities of an existing class.
In simple terms, this is the procedure in which one class inherits the attributes and methods of another class. The class whose properties and methods are inherited is known as the parent class or superclass. And the class that inherits the properties from the parent class is the child class or derived class.

**4. Polymorphism:** Derived from 2 Greek words. Poly means many and morphs means forms. So polymorphism means many forms.

## 3.Relation between classes

**1. IS-A-RELATION:** Inheritance means IS-A relation.

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/ISA1.png)

In this picture there a three class Person, a Student, and a Teacher. Teacher and Student have some common properties which are in the Person class. So they can inherit the common properties from the Person class.

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/IS-A3.png)

Here we can say Teacher IS-A Person and Student IS-A Person. The Relation Between Student to Person and Teacher to Person IS-A relation.

**2. HAS-A-RELATION:** Aggregation and Compositions

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/HAS-A.png)

Here we can say Student HAS-A Department and Student HAS-A Subject

**Aggregation:** When a student disappears, the Department remains unaffected. Thus, the Department functions as an independent class. This type of relationship, involving an independent class, is known as Aggregation.

**Simplified Explanation:** Simplified Explanation: Aggregation is a "Has-A" relationship between two classes, where each class can exist without the other. In other words, these classes are independent.

**Composition:**  Within a Department, multiple Subjects can exist. However, if the parent Department ceases to exist, the Subjects lose their significance. In this case, they are dependent on the Department. This kind of relationship, involving dependent classes, is referred to as Composition.

**Simplified Explanation:** Composition is a "Has-A" relationship between classes where both classes are dependent on each other. One class cannot exist without the presence of another class. For example, consider the relationship between a Laptop and its Processor. A laptop cannot exist without its processor.

## OOP Case Study 01: University Management System(Basic)
### Clients Requirements
Build a university management system Where the admin can manage Students, Guardians, Teachers, Staff, Departments, Subjects, exams, and accounts. Admin can Create, Update, delete and manage all resources.

### <p align="center"> Step </p>

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/Project%20Step.png)

### <p align="center"> Object Mapping </p>

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/breakdown.png)

### <p align="center"> Possible Attributes </p>

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/attributes.png)

### <p align="center"> UML Diagram(Not perfect but enough as a beginner)</p>

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/UML2.png)

## OOP Case Study 02: E-commerce Applications

### <p align="center"> UML Diagram</p>

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/EcomerceApplication.png)

## OOP Case Study 03: Account Management

### <p align="center"> UML Diagram</p>

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/BMUI.png)

![](https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/OOP%20Theory%20Resources/BankManagement.png)





