let myNumbers = [1, 4, 3, 7, 2, 6];

function multiplyNumbers(array, multiplier) {
  let multipliedNums = [];

  for (let counter = 0; counter < array.length; counter += 1) {
    let currentNum = array[counter];
    multipliedNums.push(currentNum * multiplier);
  }

  return multipliedNums;
}


console.log(multiplyNumbers(myNumbers, 3));  // => [1, 8, 3, 14, 2, 12]
// not mutated
myNumbers;                    // => [1, 4, 3, 7, 2, 6]
