// Write a method that returns true if its argument looks like a URL, false if
// it does not.


function isUrl(string) {
  if (string.match(/^https?:\/\/\S+$/)) {
    return true;
  } else {
    return false;
  }
}



console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false
