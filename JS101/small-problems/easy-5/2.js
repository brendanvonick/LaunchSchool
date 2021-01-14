function union(arr1, arr2) {
  let newArray = arr1;

  arr2.forEach(element => {
    if (!newArray.includes(element)) newArray.push(element);
  });

  return newArray.sort((a, b) => a - b);
}


union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
