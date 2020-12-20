let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOddIndices(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}


console.log(doubleOddIndices(myNumbers));  // => [1, 8, 3, 14, 2, 12]
// not mutated
myNumbers;                    // => [1, 4, 3, 7, 2, 6]
