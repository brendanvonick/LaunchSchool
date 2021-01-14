function digitList(number) {
  let array = [];
  do {
    array.push(number % 10);
    number = Math.floor(number / 10);
  } while (number >= 1);
  return array.reverse();
}


digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
