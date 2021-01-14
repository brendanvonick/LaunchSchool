function asciiValue (string) {
  let values = [];
  for (let index = 0; index < string.length; index += 1) {
    values.push(string.charCodeAt(index));
  }

  let sum = 0;
  for (let index = 0; index < values.length; index += 1) {
    sum += values[index];
  }

  return sum;
}



asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
