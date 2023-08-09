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

- **Class:** A class is like a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that class will have. For example, if you have a class called "User," it might have attributes like "name", "email", "password" and "username". 

<div style="display:flex; justify-content:center;">
  <img src="https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/Class.png" alt="Class and Object" width="30%" style="margin: auto 0;" />
  <img src="https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/Constructor.png" alt="Class and Object" alt="Image 2" width="30%"/>
  <img src="https://github.com/Mynuddin-dev/JavaScripT/blob/main/13.%20OOP/Object.png" alt="Class and Object" alt="Image 3" width="30%"/>
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

**Still confused? Here is the clarification:** Let's another Example like a **Car** can be a template or class. 
## Possible Object, Properties, and methods
#### Objects
- Toyota Corolla
- Honda Civic
- Ford Mustang
- Chevrolet Camaro
- Volkswagen Golf
- BMW 3 Series
- Mercedes-Benz C-Class
- Audi A4
- Nissan Altima
- Subaru Impreza
- ...

#### Properties (Attributes)
- Make (e.g., Toyota, Honda, Ford, etc.)
- Model (e.g., Corolla, Civic, Mustang, etc.)
- Year (manufacturing year)
- Color
- Engine type (e.g., gasoline, diesel, electric)
- Horsepower
- Transmission type (e.g., automatic, manual)
- Fuel efficiency (miles per gallon)
- Price
- Number of doors
- Seating capacity
- Features (e.g., GPS, sunroof, heated seats)

#### Methods (Behaviors/Actions/function): When a function is used in a class then we can call it a method.
- Start the engine
- Accelerate
- Brake
- Change gears
- Turn on the headlights
- Turn signal (left/right)
- Lock/unlock doors
- Sound horn
- Check fuel level
- Calculate mileage
- Calculate maintenance cost
- Display information (e.g., make, model, price)

#### Methods 
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
