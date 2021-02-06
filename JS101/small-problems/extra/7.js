// Pseudocode:
// Given 2 integers, return true if the sum of them is 10 or one of them is 10.
// Output: boolean value of true or false


function makesTen(num1, num2) {
  if (num1 === 10 || num2 === 10) {
    return true;
  } else if (num1 + num2 === 10) {
    return true;
  } else {
    return false;
  }
}



console.log(makesTen(9, 10)) // => true

console.log(makesTen(9, 9)) // => false

console.log(makesTen(1, 9)) // => true
