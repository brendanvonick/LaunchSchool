function stringToInteger(string) {
  const numbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let array = string.split('');
  let numArray = array.map(element => numbers[element]);
  let value = 0;
  numArray.forEach(int => value = (value * 10) + int);
  return value;
}



console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
