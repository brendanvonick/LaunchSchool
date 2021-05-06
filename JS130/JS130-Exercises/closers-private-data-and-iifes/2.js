// Our earlier implementation of Function.prototype.bind as myBind was
// simplistic. Function.prototype.bind has another trick up its sleeve besides
// hard-binding functions to context objects. It's called partial function
// application. Read the MDN documentation to learn more about partial function
// application. (We'll also cover it in a later course.)
//
// Alter the myBind function written in the previous exercise to support
// partial function application.

'use strict';

function myBind(func, context) {
  let partialArgs = [].slice.apply(arguments, [2])

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(context, fullArgs);
  }
}

function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// Create a function with a preset leading argument
const leadingThirtysevenList = myBind(list, null, 37);

// Create a function with a preset first argument.
const addThirtySeven = myBind(addArguments, null, 37);

const list2 = leadingThirtysevenList();
//  [37]

const list3 = leadingThirtysevenList(1, 2, 3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
//  (the second argument is ignored)
