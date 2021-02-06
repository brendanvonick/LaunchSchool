// Given an array of subarrays, rotate the sides of the matrix 90 degrees.
// SubArray1 of the new array contains all the 1st elements of the arrays (last - first)
// SubArray2 of the new array contains 2nd elements of the arrays (last - first)
// SubArray3 of the new array contains 3rd elements of the arrays (last - first)

// Pseudocode:
// Given an array, create a new array and push as many subarrays to it as are
// elements in each subarray of the original array.

// loop through, starting with last subArray - firstArray, push first elements
// of each subarray to the first subarray of the new subarray. Then push second
// elements of each subarray to the second subarray (again last to first) then
// repeat for the last elements of each subarray (last to first)

// return new array.


function rotate90(arr) {
  let newArr = [];
  arr[0].forEach(element => {
    newArr.push([]);
  });

  for (let arrIdx = arr.length - 1; arrIdx >= 0; arrIdx -= 1) {
    for (let subIdx = 0; subIdx < arr[arrIdx].length; subIdx += 1) {
      newArr[subIdx].push(arr[arrIdx][subIdx]);
    }
  }

  return newArr;
}




let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
