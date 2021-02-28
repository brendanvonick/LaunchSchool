
// 1. What will the following code output? Try to determine the results without
//    running the code.

// function func() {
//   return this;
// }
//
// let context = func();
//
// console.log(context);

// This code will log the global object. In node thats 'global' and in a
// browser that's 'window'.


// 2. What will the following code output? Explain the difference, if any,
//    between this output and that of problem 1.

// let obj = {
//   func: function() {
//     return this;
//   },
// };
//
// let context = obj.func();
//
// console.log(context);

// This will log { func: [Function: func] } to the console. This is because it
// is a mthod invocation assigned to the variable context. Because of that it
// an implicit execution context that refers to the object used to invoke it.


// 3. What will the following code output?

// message = 'Hello from the global scope!';
//
// function deliverMessage() {
//   console.log(this.message);
// }
//
// deliverMessage();
//
// let foo = {
//   message: 'Hello from the function scope!',
// };
//
// foo.deliverMessage = deliverMessage;
//
// foo.deliverMessage();

// 'Hello from the global scope!'
// 'Hello from the function scope!'
// The first is logged because deliver message is called with global scope,
// not as a function call. The second is logged because a property of the foo
// object is ceated, deliverMessage and assigned the value of the function
// deliverMessage. When the method is called, it is the local scope of foo that
// is the execution context.


// 4.

// What built-in methods have we learned about that we can use to specify a
// function's execution context explicitly?

// We have learned the call and apply function methods to explicitly specify a
// functions execution context.


// 5. Take a look at the following code snippet. Use call to invoke the add
//    method but with foo as execution context. What will this return?

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

bar.add.call(foo);

// This will return 3. This is because we are invoking the add function of bar
// with the execution context of foo, so properties a and b of foo are used in
// in the add function.
