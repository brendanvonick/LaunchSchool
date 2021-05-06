// Consider the following code:

var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

// Without running this code, what will it display? Explain your reasoning.

//  'Bye' gets displayed to the console. This is because function declarations
//  get hoisted above variable declarations. So the function declaration gets
//  hoisted above the function expression (on line 3). The function expression
//  is then seen as reassignment of what foo refers to, and gets assigned the
//  function expression. Thus 'Bye' is logged.

//  This can also be rewritten as hosting like this:

// function foo() {
//   console.log("Hello");
// }
//
// foo = function() {
//   console.log("Bye");
// }
//
// foo();
