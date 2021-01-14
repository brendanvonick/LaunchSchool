function cleanUp(string) {
  let nonAlphChar = ['<', '>', ',', '.', '/', '?', ':', ';', '"', "'",
                     '[', ']', '{', '}', '+', '=', '-', '_', '~', '`',
                     '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
                     '|'];
  let array = string.split('');

  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (nonAlphChar.includes(array[index])) {
      array[index] = ' ';
    }
  }

  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] === ' ' && array[index + 1] !== ' ') {
      newArray.push(array[index]);
    } else if (array[index] !== ' ') {
      newArray.push(array[index]);
    }
  }
  return newArray.join('');
}



cleanUp("---what's my +*& line?");    // " what s my line "
