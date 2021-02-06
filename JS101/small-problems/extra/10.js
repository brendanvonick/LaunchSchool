// Requirements:
// Explicit:
// Given a positive integer
// return an integer (next largest number formed by those digits)
// if no larger integer, return -1

// no implicit Requirements

// Pseudocode:
// Declare a function nextBiggerNum() that takes one parameter
// initialize a new empty array and assign it to a variable
// coerce the number into a string value and transform it into an array, setting it to a new variable
// if array.length === 1, return -1
// if array.length === 2, switch the ordering of the numbers and return the value of calling Number() and join('') on them
// if the array.length === 3, try keeping the original element 0 in place, then test swapping the next 2 numbers, if that value is less,


function compareDigits(num1, num2) {
  let num1Arr = String(num1).split('').sort((a, b) => a - b);
  let num2Arr = String(num2).split('').sort((a, b) => a - b);
  for (let idx = 0; idx < num1Arr.length; idx += 1) {
    if (num1Arr[idx] === num2Arr[idx]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

function nextBiggerNum(int) {
  let maxValStr = String(int).split('').sort((a, b) => b - a).join('');
  let maxVal = Number(maxValStr);
  let val = int;

  if (int === maxVal) return -1;

  while (int <= maxVal) {
    val += 1;
    if (compareDigits(int, val)) {
      return val;
    }
  }

  return -1;
}


// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2081
// if no bigger number can be composed using those digits, return -1


console.log(nextBiggerNum(9) === -1); // true
console.log(nextBiggerNum(12) === 21); // true
console.log(nextBiggerNum(123456789) === 123456798); // true;
