// 1. What does the following code log to the console? Try to answer without
//    running the code. Can you explain why the code produces the output it
//    does?

// let RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };
//
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }
//
// let rect1 = new Rectangle(2, 3);
//
// console.log(rect1.area);
// console.log(rect1.perimeter);

//  NaN
//  NaN
//  NaN is logged twice here because when we create the object rect1 the area
//  and perimeter methods for the object are set to the area and perimeter
//  methods invoked with method invocation with the RECTANGLE object. The
//  RECTANGLE object does not have a width or area perimeter and thus tries to
//  perform mathematical operations on Undefined, which results in NaN.


// 2. How would you fix the problem in the code from problem 1?

// let RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };
//
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }
//
// let rect1 = new Rectangle(2, 3);
//
// console.log(rect1.area);
// console.log(rect1.perimeter);


// 3. Write a constructor function called Circle that takes a radius as an
//    argument. You should be able to call an area method on any objects
//    created by the constructor to get the circle's area. Test your
//    implementation with the following code:

// function Circle(radius) {
//   this.radius = radius;
// }
//
// Circle.prototype.area = function() {
//   return Math.PI * (this.radius ** 2);
// }
//
// let a = new Circle(3);
// let b = new Circle(4);
//
// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// console.log(a.hasOwnProperty('area')); // => false

// 4. What will the following code log to the console and why?

// function Ninja() {
//   this.swung = true;
// }
//
// let ninja = new Ninja();
//
// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };
//
// console.log(ninja.swingSword());

//  true. It logs true because even though we create the swingSword prototype
//  function after we create the ninja object, all objects created by the
//  Ninja constructor share the same prototype. Thus when we define the
//  swingSword prototype method it becomes available to ninja.


// 5. What will the following code output and why? Try to answer without
//    running the code.

// function Ninja() {
//   this.swung = true;
// }
//
// let ninja = new Ninja();
//
// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };
//
// console.log(ninja.swingSword());

//  We get an error here, specifically an Uncaught TypeError. In contrast with
//  the previous problem, in this problem we are reassigning the Ninja
//  constructor's prototype to a new object with the swingSword method. We do
//  this after we create the ninja object, so the ninja object keeps the
//  original prototype which doesn't have the swingSword method.


// 6. Implement the method described in the comments below:

// function Ninja() {
//   this.swung = false;
// }
//
// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }
//
//
// let ninjaA = new Ninja();
// let ninjaB = new Ninja();
//
// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`


// 7. In this problem, we'll ask you to create a new instance of an object,
//    without having direct access to the constructor function:

// let ninjaA;
//
// {
//   const Ninja = function() {
//     this.swung = false;
//   };
//
//   ninjaA = new Ninja();
// }
//
// // create a `ninjaB` object here; don't change anything else
// let ninjaB = new ninjaA.constructor();
//
// console.log(ninjaA.constructor === ninjaB.constructor) // => true


// 8. Since a constructor is just a function, you can call it without the new
//    operator. However, that can lead to unexpected results and errors,
//    especially for inexperienced programmers. Write a constructor function
//    that you can use with or without the new operator. The function should
//    return the same result with either form. Use the code below to check your
//    solution:

// function User(first, last){
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }
//
//   this.name = first + ' ' + last;
// }
//
// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');
//
// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe


// Launch School answer:
