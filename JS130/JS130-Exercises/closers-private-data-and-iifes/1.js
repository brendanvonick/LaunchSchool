// Function.prototype.bind is a method on all function objects that allows us
// to hard-bind a function to a particular object. The way this works is that
// you pass a context object to the bind method and it returns a new function
// that is essentially the same function but hard-bound to the context object
// supplied.
//
// Create a function myBind, that accepts two arguments: 1) The function to
// bind, 2) The context object, and returns a new function that's hard-bound
// to the passed in context object.

'use strict';

let obj = {
  prop1: 1,
  prop2: 2
}

function logProps() {
  console.log(`${this.prop1}, ${this.prop2}`);
}

function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  }
}

let newFunc = myBind(logProps, obj);
newFunc();
