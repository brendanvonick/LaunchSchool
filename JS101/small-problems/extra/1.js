function reverseArray(arr) {
  let newArr = [];

  let reversedIdx = arr.length - 1;
  for (let idx = 0; idx < arr.length; idx += 1) {
    newArr.push(arr[reversedIdx]);
    reversedIdx -= 1;
  }

  return newArr;
}




reverseArray([1, 5, 9, 'hello', 'there']);
