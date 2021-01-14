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

function isPalindrome(text) {
  let arrayOfChar = text.split('');
  let indexToCheck = arrayOfChar.length - 1;
  let returnValue;

  for (let index = 0; index < (arrayOfChar.length / 2); index += 1) {
      if ((arrayOfChar[index] === arrayOfChar[indexToCheck]) && arrayOfChar.length > 1) {
        returnValue = true;
      } else {
        returnValue = false;
        break;
      }

      indexToCheck -= 1;
    }

  return returnValue;
}


function palindromes(string) {
  let substringArr = substrings(string);
  let result = [];

  substringArr.forEach(element => {
    if (isPalindrome(element)) {
      result = result.concat(element);
    }
  });

  return result;
}




console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
