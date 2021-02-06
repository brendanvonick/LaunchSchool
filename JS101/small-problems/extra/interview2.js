// Requirements:
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them.
// If there are no strings containing numbers, return an empty array.


// Implicit Requirements:
// is the array returned the same array or a new array?
// array elements are strings.

// Pseudocode:
// Given an array of strings
// define a function numInStr
// create a new variable and assign it to an empty array.
// loop through the elements of the array,
// split each element into a subarray containing all the characters.
// If any of those subarray elements are numbers, push that array element we are working with during that iteration to the new array.
// return the new array.

function numInStr(arr) {
  let result = arr.filter(element => {
    let subArr = element.split('');
    for (let idx = 0; idx < subArr.length; idx += 1) {
      if (Number.isNaN(Number(subArr[idx]))) {
        continue;
      } else {
        return true;
      }
    }
  });

 return result;
}




numInStr(["1a", "a", "2b", "b"]) // =>["1a", "2b"]

numInStr(["abc", "abc10"]) // => ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) // => ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) // => ["test1"]
