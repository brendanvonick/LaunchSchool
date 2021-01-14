function isPalindrome(text) {
  let arrayOfChar = text.split('');
  let indexToCheck = arrayOfChar.length - 1;
  let returnValue;

  for (let index = 0; index < (arrayOfChar.length / 2); index += 1) {
      if (arrayOfChar[index] === arrayOfChar[indexToCheck]) {
        returnValue = true;
      } else {
        returnValue = false;
        break;
      }

      indexToCheck -= 1;
    }

  return returnValue;
}




isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
