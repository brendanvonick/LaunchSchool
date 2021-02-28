// 1. What do we mean when we say that classes are first-class values?

//  We mean that classes can be passed into a function, returned from a
//  function and assigned to a variable. It can also be used anywhere a value
//  is expected. In being a first class citizen, it is like a function.

// 2. Consider the following class declaration:

// class Television {
//   static manufacturer() {
//     // omitted code
//   }
//
//   model() {
//     // method logic
//   }
// }

// What does the static modifier do? How would we call the method manufacturer?

//  The static modifier makes the method manufacturer a static method or a
//  method of the constructor. it can't be called by the object created from
//  calling 'new' with the class name, it has be called with the constructor,
//  similar to Array.isArray(). We would call this with
//  Television.manufacturer(). model() is an instance method on the otherhand.
