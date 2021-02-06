// Pseudocode:
// merge the 2 arrays into a new array and assign the new array to a variable.
// loop through each element of the array and swap values with the next value,
// sorting it, if necessary, perform this action while sorting still needs
// performing.

function merge(arr1, arr2) {
  let newArr = arr1.concat(arr2);

  let swapCount = 0;
  while (true) {
    for (let idx = 0; idx < newArr.length; idx += 1) {
      let tempVal = newArr[idx];
      if (newArr[idx] > newArr[idx + 1]) {
        newArr[idx] = newArr[idx + 1];
        newArr[idx + 1] = tempVal;
        swapCount += 1
      }
    }
    if (swapCount === 0) break;
    swapCount = 0;
  }

  return newArr;
}


merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
