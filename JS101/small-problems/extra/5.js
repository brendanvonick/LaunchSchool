// Given an array of integers arr and an integer n, find out a pair of numbers
// [x, y] from a given array such that x * y = n .
//
// If the pair is not found, return null.

function simplePair(arr, num) {
  let pair = [];
  for (let index1 = 0; index1 < arr.length; index1 += 1) {
    for (let index2 = 0; index2 < arr.length; index2 += 1) {
      if (arr[index2] === arr[index1]) continue;

      if (arr[index2] * arr[index1] === num) {
        pair.push(arr[index1], arr[index2]);
      }

      if (pair.length === 2) break;
    }
    if (pair.length === 2) break;
  }

  if (pair.length === 0) return null;
  return pair;
}


simplePair([1, 2, 3], 3) // => [1, 3]

simplePair([1, 2, 3], 6) // => [2, 3]

simplePair([1, 2, 3], 9) // => null

simplePair([1, 2, 3, 4], 12) // => [3, 4]
