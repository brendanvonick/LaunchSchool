//  For an extra challenge, refactor the solution to problem 4 using recursion.
//  Bear in mind that named functions created as IIFEs can be referenced by
//  those same functions. That is, you can call use a function's name in the
//  body of the IIFE. Don't worry if you can't solve this problem; it's a bit
//  tricky.


(function countdown(num) {
  console.log(num);

  if (num !== 0) {
    countdown(num - 1);
  };
})(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
