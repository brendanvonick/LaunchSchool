//  Problem:
//  Given an array of 3 subarrays (with 3 elements each) representing a matrix,
//  transpose the matrix such that a new array of 3 subarrays is returned with
//  1st elements in the original array subarrays are in the first new subarray,
//  the 2nd elements in the original subarrays are in the 2nd new subarray, and
//  the 3rd elements in the original subarrays are in the 3rd new subarray,
//  ordered appropriately. Be sure not to mutate the original array.

// For example:

// 1  5  8
// 4  7  2
// 3  9  6
// invoking transpose on this matrix will return:
// 1  4  3
// 5  7  9
// 8  2  6


// PEDAC

//  Input: array of 3 subarrays
//  Output: new array of 3 subarrays

//  Rules:
//    Explicit Requirements:
//      - The function should not mutate the original array.
//      - The array passed to the function as an argument contains 3 subarrays,
//        each containing 3 elements
//      - The returned, transposed array should also contain 3 subarrays, each
//        containing 3 elements

//    Implicit Requirements:
//      - All elements in each of the original array's subarray are used to
//        create the resulting array
//      - The 1st subarray of the returned array should contain all the 1st
//        elements of the original subarrays.
//      - The 2nd subarray of the returned array should contain all the 2nd
//        elements of the original subarrays.
//      - The 3rd subarray of the returned array should contain all the 3rd
//        elements of the original subarrays.

//  Algorithm:
//  transpose(arr) function
//  =======================
//  - Initialize a variable 'resultArr' and assign it to an array containing 3
//    empty subarrays.
//  - Create an outer loop to iterate over each element (subarray) of the
//    original array.
//    - Create an inner loop that iterates over the elements in the subarray
//      from index '0' up to, but not including the length of the subarray.
//      - Push the element at the current inner loop index to the 'resultArr's
//        subarray at the position of the inner loop index.
//    - End the inner loop.
//  - End the outer loop.
//  - return the 'resultArr' array representing the transposed matrix.


function transpose(arr) {
  let resultArr = [[], [], []];

  arr.forEach(subArray => {
    for (let subIdx = 0; subIdx < subArray.length; subIdx += 1) {
      resultArr[subIdx].push(subArray[subIdx]);
    }
  });

  return resultArr;
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const matrix2 = [
  [11, 22, 33],
  [44, 55, 66],
  [77, 88, 99]
];

const matrix3 = [
  ['one', 'two', 3],
  ['four', 'five', 6],
  ['seven', 8, 'nine']
]

let newMatrix = transpose(matrix);
let newMatrix2 = transpose(matrix2);
let newMatrix3 = transpose(matrix3);


console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log(newMatrix2);     // [[11, 44, 77], [22, 55, 88], [33, 66, 99]]
console.log(matrix2);        // [[11, 22, 33], [44, 55, 66], [77, 88, 99]]
console.log(newMatrix3);     // [['one', 'four', 'seven'], ['two', 'five', 8], [3, 6, 'nine']]
console.log(matrix3);        //[['one', 'two', 3], ['four', 'five', 6], ['seven', 8, 'nine']]
