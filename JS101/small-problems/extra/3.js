// Requirements:
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
  let obj = { true: 0, false: 0 };

  arr.forEach(element => {
  obj[element] += 1
  });
  
  return obj['true'];
}


countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
