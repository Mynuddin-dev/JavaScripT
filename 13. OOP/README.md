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

## Introducing Object-Oriented Programming (OOP):

Programming is like giving instructions to a computer to perform tasks. As your programs become more complex, organizing and managing your code becomes important. That's where Object-Oriented Programming (OOP) comes in!

OOP is a way of writing computer programs by organizing your code into reusable pieces called "objects." These objects represent real-world things or concepts, and they have both data (attributes) and behaviors (methods). OOP allows you to model and solve complex problems in a more structured and organized manner.

### Key Concepts of OOP:

- **Class:** A class is like a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that class will have. For example, if you have a class called "User," it might have attributes like "name", "email", "password" and "nickname".

![Class and Object](link_to_your_image_here.jpg)

- **Object:** An object is an instance created from a class. If a class is a blueprint, an object is a specific realization of that blueprint. You can create multiple objects from the same class, each with its own unique data, like user1, user2...

- **Attributes:** Attributes are the characteristics or properties of an object. For instance, a "User" object might have attributes like "name", "email", "password" and "nickname".

- **Methods:** Methods are the functions or actions that an object can perform. For our "User" example, methods could include "create user", "login", "logout", and "reset password."

With the foundation of OOP, you can create more organized, reusable, and manageable code. Each object encapsulates data and behavior, making your code easier to understand and maintain.

Remember, OOP is a powerful paradigm that can greatly enhance your programming skills and open doors to building more complex and robust software systems.
