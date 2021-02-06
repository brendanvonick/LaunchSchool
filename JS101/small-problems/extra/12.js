// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume that the given string consists of lowercase English letters only.

// Example 1:

// Input: 'abab'
// Output: True
// Explanation: it's the substrin ab twice
// Example 2:

// Input: 'aba'
// Output: False

// Requirements:
// Input: string
// Output: true

// Explicit:
// characters in the string only consist of lowercase English letters


// Implicit:
// string length is a multiple of the substring length
// substring length cannot be greater than half the string length

// Pseudocode:
// Declare a function repeatedSubstringPattern(str) that takes 1 string variable as a paramter
// create an array of all substrings of str beginning at index 0, with a length no greater than str.length / 2
// loop through this new array of substrings.
// initialize a new variable in the for loop and set it equal to str.length / substring.length
// if this new variable is not an integer, continue iteration
// if this new variable is an integer, see if calling repeat() method on the substring with the new variable number of repetitions equals the original string. If so, return true.
// if we get through iterating and true hasn't been returned yet, return false.



function repeatedSubstringPattern(str) {
  let substrArr = [];
  for (let idx = 0; idx < str.length / 2; idx += 1) {
    substrArr.push(str.slice(0, idx + 1));
  }

  for (let idx = 0; idx < substrArr.length; idx += 1) {
    let element = substrArr[idx];
    let repeatVal = str.length / element.length;
    if (Number.isInteger(repeatVal)) {
      if (element.repeat(repeatVal) === str) {
        return true;
      }
    }
  }

  return false;
}


// console.log(repeatedSubstringPattern('abab'));

console.log(repeatedSubstringPattern('abab') === true); // => true
console.log(repeatedSubstringPattern('aba') === false); // => true
console.log(repeatedSubstringPattern('aabaaba') === false); // => true
console.log(repeatedSubstringPattern('abaababaab') === true); // => true
console.log(repeatedSubstringPattern('abcabcabcabc') === true); // => true
console.log(repeatedSubstringPattern('wakawaka') === true); // => true
