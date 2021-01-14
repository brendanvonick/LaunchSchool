function sequence(num1, num2) {
  let arr = [];

  for (let i = 1; i <= num1; i += 1) {
    arr.push(num2 * i);
  }
  return arr;
}


sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
