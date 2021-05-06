//  Rewrite the following code using classic JavaScript syntax:

// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }
//
// let result = product(2, 3, 4, 5);

//  Hint: You need the built-in arguments object to convert this code to
//  classic syntax.

function product() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
