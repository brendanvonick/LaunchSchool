// Requirements:
// Explicit:
// Given 3 arrays, all containing integers, return the sum of the integers which all 3 arrays have in common
// Return Value is an integer.

// Implicit: none

//Pseudocode:
// declare a function that takes 3 array parameters
// for each element in array 1, check to see if the other arrays, contain that number
// create a new array for each of these elements that are in the other arrays.
// return the sum of the values in this new array.


function sumCommon(arr1, arr2, arr3) {
  let resultArr = [];

  arr1.forEach(int => {
    if (arr2.includes(int) && arr3.includes(int)) resultArr.push(int);
  });

  let result = resultArr.reduce((a, b) => a + b, 0);
  return result;
}



console.log(sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2])); // => 5
// 2 & 3 are common in all 3 arrays.

console.log(sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2])); // => 7
// 2, 2 & 3 are common in all 3 arrays.

console.log(sumCommon([1], [1], [2])); // => 0
