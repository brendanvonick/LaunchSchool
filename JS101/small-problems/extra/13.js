// Given an array of strings made only from lowercase letter, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character 3 times in the final answer.

// Requirements:
// Explicit:
// input: array of strings of all lowercase letters
// output: array (empty if no shared characters), otherwise include the letter as many times as it appears in all strings

// Implicit:
// will always return an array
// may return characters more than once


// Pseudocode:
// Declare a function commonChars(arr) that takes an array as a parameter.
// initialize a variable obj and assign it to an empty object.
// for the first string (element at index 0) of the array argument passed into the function, add a key to the object for that letter and assign it a value of 0.
// iterate over each letter in the first string (element index 0) and test whether or not it appears in the other strings.
// for each time it does appear add 1 to the value

// create and return a new array that returns the keys of the object with a value greater than 0. If the key is greater than 1, add that letter to the array value amount of times.


function commonChars(arr) {
  let obj = {};
  let arrCopy = [...arr];
  arrCopy.shift();
  let str1 = arr[0];
  let result = [];

  for (let idx = 0; idx < str1.length; idx += 1) {
    if (!obj.hasOwnProperty(str1[idx])) {
      obj[str1[idx]] = 0;
    }
  }

  for (let idx = 0; idx < str1.length; idx += 1) {
    let included = false
    arrCopy.forEach(element => {
      if (element.includes(str1[idx])) {
        let elementIdx = element.indexOf(str1[idx]);
        element = element.split('').splice(elementIdx, 1).join('');
        included = true;
      } else {
        included = false;
      }
    });

    if (included === true) {
      obj[str1[idx]] += 1;
    }
  }

  let objProp = Object.keys(obj);

  objProp.forEach(prop => {
    while (obj[prop] > 0) {
      result.push(prop);
      obj[prop] -= 1;
    }
  });

  return result;
}

console.log(commonChars(['a', 'b'])); // []
console.log(commonChars(['ab', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []
