//  Consider the following code and output:

// countdown(7)
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

//  Replace the invocation of countdown with an IIFE that produces the same
//  results.

(function(start) {
  for (let num = start; num >= 0; num -= 1) {
    console.log(num);
  }
})(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
