// PEDAC:
// Understanding the Problem:
// An anagram is a is a word or phrase formed by rearranging the letters of a
//  different word or phrase, typically using all the original letters exactly
//  once.
// Given a word, and an array of potential anagrams, determine any and all
//  anagrams in the array and return them in a separate array. If there are no
//  anagrams, return an empty array.

// Algorithm:
//  Class Anagram takes one argument, a string.
//    contains:
//      - constructor function
//      - match instance method that takes one array argument

//  match method (takes one array argument, wordsArray)
//    SET a new variable, result, to an empty array.
//    SET a new variable, wordsCopy, to a copy of the wordsArray argument
//    ITERATE over each word in the wordsArray
//      IF the length of the potential anagram matches the of the word property,
//        ITERATE over each character of the word
//          IF the potential anagram contains each character of the word:
//            push the confirmed anagram to the




class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(wordsArray) {
    let result = [];
    let uniqueWords = this.removeInvalid(wordsArray);
    uniqueWords.forEach(potAnagram => {
      if (potAnagram.length === this.word.length && this.testChars(potAnagram)) {
        result.push(potAnagram);
      }
    });

    return result;
  }

  removeInvalid(wordsArray) {
    let arrayCopy = [...wordsArray];
    let result = [];

    arrayCopy.forEach(word => {
      if (!result.includes(word) && word !== this.word && this.capitalCount(word)) {
        result.push(word);
      }
    });

    return result;
  }

  capitalCount(potAnagram) {
    let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let wordCaps = 0;
    let potAnagramCaps = 0;

    [].forEach.call(this.word, char => {
      if (capitals.includes(char)) wordCaps += 1;
    });

    [].forEach.call(potAnagram, char => {
      if (capitals.includes(char)) potAnagramCaps += 1;
    });

    if (wordCaps === potAnagramCaps) {
      return true;
    } else {
      return false;
    }
  }

  testChars(potAnagram) {
    let potAnaCopy = potAnagram.toLowerCase();
    let word = this.word.toLowerCase();
    for (let idx = 0; idx < word.length; idx += 1) {
      if (potAnaCopy.includes(word[idx])) {
        let charIdx = potAnaCopy.indexOf(word[idx]);
        potAnaCopy = potAnaCopy.slice(0, charIdx) + potAnaCopy.slice(charIdx + 1);
      }
    };

    if (potAnaCopy.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Anagram;
