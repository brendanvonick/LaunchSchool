// Our earlier implementation of Function.prototype.bind as myBind was
// simplistic. Function.prototype.bind has another trick up its sleeve besides
// hard-binding functions to context objects. It's called partial function
// application. Read the MDN documentation to learn more about partial function
// application. (We'll also cover it in a later course.)
//
// Alter the myBind function written in the previous exercise to support
// partial function application.

function myBind(func, ctx) {
  let partialArgs = [].slice.apply(arguments, [2])

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  }
}


function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
