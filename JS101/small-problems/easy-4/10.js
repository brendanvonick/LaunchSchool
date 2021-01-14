function swap(string) {
  let arrayOfStrings = string.split(' ');
  let swappedFirstLast = [];

  arrayOfStrings.forEach(element => {
    let subArray = element.split('');
    let firstLetter = subArray[0];
    subArray[0] = subArray[subArray.length - 1];
    subArray[subArray.length - 1] = firstLetter;
    swappedFirstLast.push(subArray.join(''));
  });

  return swappedFirstLast.join(' ');
}



swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
