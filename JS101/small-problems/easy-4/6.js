function arrayCreation(num) {
  let arrayOfNum = [];

  do {
    let element = num % 10;
    num = Math.floor(num / 10);
    arrayOfNum.push(element);
  } while (num >= 1);

  return arrayOfNum.reverse();
}

function isPalindromicNumber(number) {
  let array = arrayCreation(number);
  let indexToCheck = array.length - 1;
  let returnValue;

  for (let index = 0; index < (array.length / 2); index += 1) {
      if (array[index] === array[indexToCheck]) {
        returnValue = true;
      } else {
        returnValue = false;
        break;
      }

      indexToCheck -= 1;
    }

  return returnValue;
}



isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
