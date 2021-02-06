


//  High Level Algorithm:
//  - Declare a result variable and initialize it, assigning it to an empty
//    array containing 3 empty subarrays.
//  - Create an outter loop to iterate through each element of the original
//    array.
//    - Create an inner loop to iterate through each element of the subarrays
//      for the current iteration of the outter loop, taking note of the inner
//      loops index during iteration.
//      - For each iteration of the inner loop, push the element at the current
//        inner index to the result array's subarray at that same index.
//  - Return the result array containing the 3 subarrays.



function transpose(arr) {
  let newArr = [[], [], []];

  for (let arrIdx = 0; arrIdx < arr.length; arrIdx += 1) {
    for (let subIdx = 0; subIdx < arr[arrIdx].length; subIdx += 1) {
      newArr[subIdx].push(arr[arrIdx][subIdx]);
    }
  }
  return newArr;
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

let newMatrix = transpose(matrix);
let newMatrix2 = transpose(matrix2);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log(newMatrix2);     // [[11, 44, 77], [22, 55, 88], [33, 66, 99]]
console.log(matrix2);        // [[11, 22, 33], [44, 55, 66], [77, 88, 99]]
