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

function mergeSort(arr) {
  let newArr = [];

  newArr.push(arr.slice(0, Math.floor(arr.length / 2)));
  newArr.push(arr.slice(Math.floor(arr.length / 2)));


  return merge(newArr[0], newArr[1]);
}


mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
