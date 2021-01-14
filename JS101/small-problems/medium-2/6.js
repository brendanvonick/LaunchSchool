function squareCount(arr) {
  let total = 0;

  arr.forEach(element => {
    total += element;
  });

  return total ** 2;
}

function sumSquareDifference(num) {
  let arr = [];
  let countSquare = 0;

  for (let idx = 1; idx <= num; idx += 1) {
    arr.push(idx)
  }

  let squareTotal = squareCount(arr);

  arr.forEach(element => {
    countSquare += (element ** 2);
  });

  return squareTotal - countSquare;
}




sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
