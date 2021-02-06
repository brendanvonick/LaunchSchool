// You are going to be given an array of integers. Your job is to take that array and find
// an index N where the sum of the integers to the left of N is equal to the sum of the
// integers to the right of N. If there is no index that would make this happen. Return -1.

// For example:

// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1];
// Your function will return the index 3, because at the 3rd position of the array,
// the sum of the left side of the index [1, 2, 3] and the sum of the right side of the index
// [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Requirements:
// Explicit:
// given an array of integers (passed into the function as an argument)
// return **the index** of the element where both sides are equal if possible
// if not possible, return -1

// Implicit:
// At an element of index 0, the left side = 0.

// Pseudocode:
// Declare a function findEvenIndex(arr) that takes an array as a parameter
// if arr.length === 1, return 0
//


function findEvenIndex(arr) {

  if (arr.length === 1) {
    return 0;
  }

  for (let idx = 0; idx < arr.length; idx += 1) {
    let leftSide = arr.slice(0, idx);
    let rightSide = arr.slice(idx + 1);

    let leftTotal = leftSide.reduce((accumulator, element) => accumulator + element, 0);
    let rightTotal = rightSide.reduce((accumulator, element) => accumulator + element, 0);

    if (leftTotal === rightTotal) {
      return idx;
    }
  }

  return -1;

}



console.log(findEvenIndex([0, 2]) === 1); // true
console.log(findEvenIndex([2, 0]) === 0); // true
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true
