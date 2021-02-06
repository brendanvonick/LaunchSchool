// Requirements
// There will be at least 2 numbers in the array.
// Return the 2nd largest number in the array.


// Pseudocode:
// Given an array of numbers
// create a variable and set the value equal to 0.
// loop through each element in that array, and if the element is greater than the saved value in the variable, set the variable equal to that element, otherwise continue itertion.
// This will give us the largest number in the array.
// Use the filter method on the array to create a new variable, filter the array for every number except the largest number and save it to the variable.
// Loop through the new array, and determine the largest value.
// return the new largest value.


// Another way to do this: sort the array, return the 2nd to last value.

// function secondLargest(arr) {
//   let val = 0;
//   arr.forEach(num => {
//     if (num > val) val = num
//   });
//
//   let newArr = arr.filter(num => {
//     return num !== val;
//   });
//
//   val = 0;
//   newArr.forEach(num => {
//     if (num > val) val = num
//   });
//
//   return val;
//
// }


// function secondLargest(arr) {
//   let newArr = arr.sort((a, b) => a - b);
//   return newArr[newArr.length - 2];
// }



secondLargest([10, 40, 30, 20, 50]) // => 40

secondLargest([25, 143, 89, 13, 105]) // => 105

secondLargest([54, 23, 11, 17, 10]) // => 23
