function stringToSignedInteger(string) {
  const numbers = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};
  let array = string.split('');
  let sign = '';

  if (array[0] === '+' || array[0] === '-') sign = array.shift();
  let numArray = array.map(element => numbers[element]);
  let value = 0;
  numArray.forEach(int => value = (value * 10) + int);

  if (sign === '-') {
    return 0 - value;
  } else {
    return value;
  }
}



console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
