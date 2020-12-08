let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsInExclamationMark(string) {
  return string.substring(string.length - 1) === '!';
}

endsInExclamationMark(str1); // true
endsInExclamationMark(str2); // false

// You could also do the following:

str1.endsWith("!"); // true
str2.endsWith("!"); // false
