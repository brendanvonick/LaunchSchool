function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach(element => {
    for (let index = 0; index < arr2.length; index += 1) {
      result.push(element * arr2[index]);
    }
  });
  return result.sort((a, b) => a - b);
}


multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
