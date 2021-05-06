//  The following code doesn't work:

// bar();
//
// var bar = function() {
//   console.log("foo!");
// };

//  Without changing the order of the invocation and function definition,
//  update this code so that it works.


bar();

function bar() {
  console.log("foo!");
}

//  To call the function before it is defined, we need to use function declaration.
