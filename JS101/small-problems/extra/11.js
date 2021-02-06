// write a function scramble(str1, str2) that returns true if a portion of str1 can be rearranged to match str2, otherwise return false

// for example:
// str1 is 'rkqodlw' and str2 is 'world' the output should be true.


// only lower case letters will be used, no punctuation, or digits will be included

// Requirements:
// Input: 2 strings. str1 and str2
// Output: boolean value

// Explicit:
// only lowercase letters will be ued, no punctuation or digits will be included

// Implicit:
// if str1 is not at least the length of str2, return value is false.


// Pseudocode:
// declare a function scramble(str1, str2) that takes 2 string parameters
// initialize an array variable and set it equal to splitting str1 with split('')
// iterate through each index of str2, if the new array contains the character at the string index position, remove the character from the array and continue, else return false.
// if iteration completes return true.


function scramble(str1, str2) {
  let str1Arr = str1.split('');

  for (let idx = 0; idx < str2.length; idx += 1) {
    let char = str2[idx];
    if (str1Arr.includes(char)) {
      let str1ArrIndex = str1Arr.indexOf(char);
      str1Arr.splice(str1ArrIndex, 1);
    } else {
      return false;
    }
  }

  return true;
}




console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('cedewaraaossoqqty', 'codewars')); // true
