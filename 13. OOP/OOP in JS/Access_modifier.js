// An access modifier is a keyword that we can apply to a member of a class to control its access from the outside.

// public : When you want to access the members Everywhere in the class
// private: when you want to access the members only inside the class.
// protected: when you want to access the members inside the class and its subclasses.


// But In JavaScript, unlike some other programming languages such as Java or C#, there are no built-in access modifiers like "public," "private," or "protected" to control the visibility of properties or methods within a class. By default, all properties and methods of a class are accessible from outside the class. This means that everything you define within a class is effectively public.


// However, you can achieve encapsulation and control access to properties and methods through various techniques, conventions, and patterns. Here are some common approaches used in JavaScript to emulate access modifiers:

// 1.Public: Properties and methods declared directly within the class are inherently public and can be accessed from outside the class.


