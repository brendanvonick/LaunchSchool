const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                   'eight', 'nine'];
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function wordToDigit(string) {
  let arrOfWords = string.split('.');
  for (let index = 0; index < arrOfWords.length; index += 1) {
    arrOfWords[index] = arrOfWords[index].split(' ');

    for (let idx = 0; idx < arrOfWords[index].length; idx += 1) {
      if (NUM_WORDS.includes(arrOfWords[index][idx])) {
        let constIndex = NUM_WORDS.indexOf(arrOfWords[index][idx]);
        arrOfWords[index][idx] = NUMBERS[constIndex];
      }
    }

    arrOfWords[index] = arrOfWords[index].join(' ');
  }
  return arrOfWords.join('.');
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
