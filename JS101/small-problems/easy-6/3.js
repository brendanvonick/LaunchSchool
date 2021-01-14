function reverseNumber(num) {
  let arr = [];
  do {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  } while (num > 0);

  return Number(arr.join(''));
}


reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
