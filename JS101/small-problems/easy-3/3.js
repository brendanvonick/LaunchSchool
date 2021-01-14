function stringy (number) {
  let string = '';
  if (number % 2 === 0) {
    string = '10'.repeat(number / 2);
  } else {
    string = '10'.repeat(number / 2) + '1';
  }

  return string;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(1));    // "1"
