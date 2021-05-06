//  Without running the following code, determine what it logs to the console:

var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

//  "NaN" is logged here. This is because variables defined with the var
//  keyword have function scope. The initial bar variable defined on line 3 is
//  placed in the global scope. Within the function foo though, another bar
//  variable is defined within the scope of that function, shadowing the bar
//  variable in the outer cope. However, the bar variable here is used in it's
//  definition within the foo function.. Because of this, bar is hoisted to the
//  top of the foo function and initialized with a value of undefined. You can't
//  perform a mathematical function on undefined so NaN is logged.

// The rewritten hoisted code looks like this:

// var bar;
// bar = 82;
//
// function foo() {
//   var bar;
//   bar = bar - 42;
//   console.log(bar);
// }
//
// foo();
