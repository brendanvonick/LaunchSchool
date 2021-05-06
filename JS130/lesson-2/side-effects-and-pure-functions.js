//  1. What side effects are present in the foo function in the following code?

// const bar = 42;
// let qux = [1, 2, 3];
// let baz = 3;
//
// function foo(arr) {
//   let value = arr.pop();
//   console.log(`popped ${value} from the array`);
//   return value + bar + baz;
// }
//
// foo(qux);

//  - The function foo logs a string to the console.
//  - The function foo also mutates the argument array, qux, which is not a
//    local array.


//  2. Which of the following functions are pure functions?

// Function 1:
//
// function sum(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// Function 2:
//
// function sum(a, b) {
//   a + b;
// }

// Function 3:
//
// function sum(a, b) {
//   return a + b;
// }

// Function 4:
//
// function sum(a, b) {
//   return a + b + Math.random();
// }

// Function 5:
//
// function sum(a, b) {
//   return 3.1415;
// }

//  Of the above functions, function 2, 3 and 5 are pure functions.
//  Function 1 logs to the console, so it isn't a pure function. Function 4
//  uses a random number generator, Math.random() so it isn't a pure function.
