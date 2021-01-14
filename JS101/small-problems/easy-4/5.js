const ALPHA_NUMERIC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                       'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                       'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7',
                       '8', '9', '0'];

function nonAlphaNumeric(array) {
  let newArrayOfChar = [];
  array.forEach(element => {
    if (ALPHA_NUMERIC.includes(element)) {
      newArrayOfChar.push(element);
    }
  });
  return newArrayOfChar;
}

function isRealPalindrome(text) {
  let arrayOfChar = text.toLowerCase().split('');
  let newArray = nonAlphaNumeric(arrayOfChar);
  let indexToCheck = newArray.length - 1;
  let returnValue;

  for (let index = 0; index < Math.floor(newArray.length / 2); index += 1) {
      if (newArray[index] === newArray[indexToCheck]) {
        returnValue = true;
      } else {
        returnValue = false;
        break;
      }

      indexToCheck -= 1;
    }

  return returnValue;
}


isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
