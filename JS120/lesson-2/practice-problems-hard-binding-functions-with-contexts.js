// 1. What method can we use to bind a function permanently to a particular
//    execution context?

//  We can use the bind method to return a function with execution context
//  permanently bound to the object passed as an argument to bind.


// 2. What will the following code log to the console?

// let obj = {
//   message: 'JavaScript',
// };
//
// function foo() {
//   console.log(this.message);
// }
//
// foo.bind(obj);

//  Nothing will be logged to the console here because it returns a new
//  function.


// 3. What will the following code output?

// let obj = {
//   a: 2,
//   b: 3,
// };
//
// function foo() {
//   return this.a + this.b;
// }
//
// let bar = foo.bind(obj);
//
// console.log(foo());
// console.log(bar());

//  NaN
//  5
//  The first line logged to the console is invoking the foo function with
//  context of the global object. because this.a and this.b refer to undefined
//  trying to add them together results in NaN. In the 2nd line, we invoke bar,
//  which has foo permanently bound to the context of obj. Because a is 2 and
//  b is 3 in this context, the resulting returned value that is logged is 5.


// 4. What will the code below log to the console?

// let positivity = {
//   message: 'JavaScript makes sense!',
// };
//
// let negativity = {
//   message: 'JavaScript makes no sense!',
// };
//
// function foo() {
//   console.log(this.message);
// }
//
// let bar = foo.bind(positivity);
//
// negativity.logMessage = bar;
// negativity.logMessage();

//  'JavaScript makes sense' is logged. This is because we assign bar to the
//  returned function of binding foo to the object positivity. We then create
//  the property logMessage in the negativity object with this new bar function.
//  However, no context is lost when doing this because bar is foo permanently
//  bound to positivity so whenever it is invoked, it's still the positivity
//  object message that is logged.


// 5. What will the code below output?

// let obj = {
//   a: 'Amazebulous!',
// };
// let otherObj = {
//   a: "That's not a real word!",
// };
//
// function foo() {
//   console.log(this.a);
// }
//
// let bar = foo.bind(obj);
//
// bar.call(otherObj);

//  'Amazebulous!' is logged. This is because we permanently bind foo to obj
//  and assign that returned function to bar. Even when it is used with call on
//  another object, it still keeps its context and the original obj is used as
//  the context for foo when calling bar.
