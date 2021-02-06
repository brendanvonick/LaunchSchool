// Given 2 strings, your job is to find out if there is a substring
// that appears in both strings. You will return true if you find a
// substring that appears in both strings. Or false if you do not.
// We only care about substrings that are longer than 1 letter long.


//  Requirements:
//  Explicit:
//  Input: 2 strings
//  Output: boolean value
//  look for a substring that is inbluded in each string
//  substring must be longer than 1 character long

//  Implicit:
//  If any string passed into the function is of length 0, return false.
//  Case does not matter.
//  Only 2 characters have to match.

//  Pseudocode:
//  Declare a function substringTest(str1, str2) with 2 string parameters
//  Convert both strings to lowercase.
//  Create an array from the lowercase string of smaller length of all strings of length 2.


function substringTest(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let smallStr;
  let largeStr;

  if (str1.length <= str2.length) {
    smallStr = str1;
    largeStr = str2;
  } else {
    smallStr = str2;
    largeStr = str1;
  }

  let substrArr = [];

  for (let strIdx = 0; strIdx < smallStr.length - 1; strIdx += 1) {
    substrArr.push(smallStr.slice(strIdx, strIdx + 2));
  }
  
  return substrArr.some(substr => {
    if (largeStr.includes(substr)) {
      return true;
    }
  });

}


console.log(substringTest('Something', 'Fun') === false); // => true
console.log(substringTest('Something', 'Home') === true);  // => true
console.log(substringTest('Something', 'Fun') === false);  // => true
console.log(substringTest('Something', '') === false);  // => true
console.log(substringTest('', 'Something') === false);  // => true
console.log(substringTest('BANANA', 'banana') === true);  // => true
console.log(substringTest('test', 'lllt') === false);  // => true
console.log(substringTest('BANANA', 'banana') === true);  // => true
console.log(substringTest('', '') === false);  // => true
console.log(substringTest('1234567', '541265') === true);  // => true
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true);  // => true
