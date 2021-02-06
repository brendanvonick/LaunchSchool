//  Problem:
//  Write a function that takes two sorted arrays as arguments, and returns a
//  new array that contains all the elements from both input arrays in sorted
//  order. You may not provide any solution that requires you to sort the result
//  array. You must build the result array one element at a time in the proper
//  order. Your solution should not mutate the input arrays.

//  PEDAC

//  Input: 2 arrays
//  Output: 1 array

//  Rules:
//  Explicit Requirements:
//  - Unable to perform sorting of any type on the resulting array. The result
//    array must be constructed 1 element at a time in proper order.
//  - invoking the function on the arrays should not mutate the input arrays.

//  Implicit Requirements:
//  - Arrays will only contain numbers as elements.
//  - Arrays with no elements (array.length === 0) will append no elements to
//    the final array.
//    - If an array has no elements, a copy of the other array will be returned.
//  - The elements of each array passed to the function are already sorted.
//  - If an integer is in both arrays, add it into the resulting array twice.

//  Algorithm:
//  merge(arr1, arr2) function
//  ==========================
//  - Initialize a variable 'resultArr' and assign it to an empty array.
//  - Initialize a new variable 'arr1Copy' and assign it to a copy of the 1st
//    array passed to the function as an argument ('arr1').
//  - Initialize a new variable 'arr2Copy' and assign it to a copy of the 2nd
//    array passed to the function as an argument ('arr2').
//
//  - Begin a conditional.
//    - If both arrays, 'arr1Copy' and 'arr2Copy' have a length of '0':
//      - Return the 'resultArr' empty array.
//    - If only 'arr1Copy' has a length of '0':
//      - Return the 'arr2Copy' array.
//    - If only 'arr2Copy' has a length of '0':
//      - Return the 'arr1Copy' array.
//    - If none of the prior conditions have returned an array:
//      - Invoke the 'pushOrderedElements' function, passing in 'resultArr',
//        'arr1Copy' and 'arr2Copy' as arguments.
//  - End the conditional.
//
//  - Begin a conditional.
//    - If either 'arr1Copy' or 'arr2Copy' still has a length greater than '0':
//      - Add any remaining elements of either array to the 'resultArr' array.
//  - End conditional.
//
//  - Return the 'resultArr' array.
//
//
//  pushOrderedElements(result, array1, array2) function
//  ====================================================
//  - Begin a loop, setting the condition for looping to require both the 'array1'
//    argument and the 'array2' argument having lengths greater than '0'.
//    - Begin a conditional.
//      - If the 1st element of 'array1' is less than or equal to the 1st element
//        of 'array2':
//        - Remove the 1st element of 'array1' and add it to the 'result' array.
//      - If the 1st element of 'array1' is less than the 1st element of 'array2':
//        - Remove the 1st element of 'array2' and add it to the 'result' array.
//    - End the conditional.
//  - End the loop.



function pushOrderedElements(result, array1, array2) {
  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
}

function merge(arr1, arr2) {
  let resultArr = [];
  let arr1Copy = [...arr1];
  let arr2Copy = [...arr2];

  if (arr1Copy.length === 0 && arr2Copy.length === 0) {
    return resultArr;
  } else if (arr1Copy.length === 0) {
    return arr2Copy;
  } else if (arr2Copy.length === 0) {
    return arr1Copy;
  } else {
    pushOrderedElements(resultArr, arr1Copy, arr2Copy);
  }

  if (arr1Copy.length > 0 || arr2Copy.length > 0) {
    resultArr = resultArr.concat(arr1Copy, arr2Copy);
  }

  return resultArr;
}



console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3])
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
