//  Without running the following code, determine what value it logs on the
//  last line. Explain how the program arrived at that final result.

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); // function with prod = 2
let result = bar(3); // bar = 6 result = 6
result += bar(4); // bar = 24 result = 30
result += bar(5); // bar = 120 result = 150
console.log(result);  // 150

//  The value logged is 150

//  When we create the bar variable, we set it to a function where the value of
//  prod is initially set at 2, from line 12. Every time we invoke the bar
//  function with a new number, the bar variable that is referenced in the
//  closure of the bar function changes. So on line 3, bar is reassigned to the
//  product of 3 and it's original value, 2, which is 6. The result variable  is
//  a completely different variable that is a running total with cumulative
//  additions based on the value of prod when returned from each invocation of
//  the bar function.
