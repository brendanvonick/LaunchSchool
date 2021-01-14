function leadingSubstrings(string) {
  let arr = [];

  for (let length = 1; length <= string.length; length += 1) {
    arr.push(string.slice(0, length));
  }
  return arr.sort();
}

function substrings(str) {
  let substrings = [];
  let result = [];

  for (let len = 0; len < str.length; len += 1) {
    substrings.push(str.slice(len));
  }

  substrings.forEach(element => {
    result = result.concat(leadingSubstrings(element));
  });

  return result;
}


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
