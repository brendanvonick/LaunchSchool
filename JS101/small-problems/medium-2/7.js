function isNotSorted(arr) {
  let value;
  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    if (arr[idx] > arr[idx + 1]) {
      value = true;
      break;
    } else {
      value = false;
    }
  }
  return value;
}

function bubbleSort(arr) {
  do {
    for (let idx = 0; idx < arr.length - 1; idx += 1) {
      let idxValue = arr[idx];

      if (arr[idx] > arr[idx + 1]) {
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = idxValue;
      }
    }
  } while (isNotSorted(arr));
}




let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
