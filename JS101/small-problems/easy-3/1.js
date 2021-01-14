function crunch(string) {
  let array = string.split('');
  let newArray = [];
  let index = 0;
  do {
    if (array[index - 1] !== array[index]) {
      newArray.push(array[index])
    }
    index += 1;
  } while (index < array.length)
  return newArray.join('');
}




crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
