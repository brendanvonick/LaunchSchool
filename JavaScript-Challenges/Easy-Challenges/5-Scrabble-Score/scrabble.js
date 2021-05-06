// Write a program that, given a word, computes the Scrabble score for that word.
//
// Letter Values
//
// You'll need the following tile scores:

// Letter	Value
// A, E, I, O, U, L, N, R, S, T	: 1
// D, G	                        : 2
// B, C, M, P	                  : 3
// F, H, V, W, Y	                : 4
// K	                            : 5
// J, X	                        : 8
// Q, Z	                        : 10

// How to Score
//
// Sum the values of all the tiles used in each word. For instance, lets
// consider the word CABBAGE which has the following letters and point values:
//
// 3 points for C
// 1 point for each A (there are two)
// 3 points for B (there are two)
// 2 points for G
// 1 point for E
// Thus, to compute the final total (14 points), we count:

// 3 + 2*1 + 2*3 + 2 + 1
// => 3 + 2 + 6 + 3
// => 5 + 9
// => 14

// PEDAC:
// Understanding the Problem
// In Scrabble, each character in a word has a point value. The Scrabble score
//  for a specific word is determined by adding up all the points denoted by
//  each character.
// Explicit Requirements:
//  - Given a word, determine it's Scrabble point value and return
//    the point value.
//  - Each character has a preset point value. Use these preset values to
//    determine the total value.
// Implicit Requirements:
//  - A string with no characters returns a value of 0.
//  - Case insensitive

// Algorithm:
//  Class Scrabble:
//    - SET the constructor method: takes one argument that is a string
//      representing the word.
//      - SET the 'word' instance property is set to the string argument passed
//        to the constructor set to upper case with toUpperCase().
//    - SET Static property (LETTER_VALUES):
//      - An object with all the letters and their relative values.
//    - score method:
//      - return a static method 'score' call with the word instance property
//        as an argument
//    - SET Static method Score which takes an argument of a string, 'wordString':
//      - SET a new variable 'points' to be 0.
//      - SET a variable 'word' to be an empty string.
//      - IF CLAUSE: if the 'wordString' argument has a truthy value:
//        - set the 'word' variable to be 'wordString' to upper case.
//      - ITERATE: over the letters in the instance 'word' property.
//        - ITERATE: over the LETTER_VALUES static property.
//          - IF CLAUSE: if the LETTER_VALUES letter (key) matches the word
//            character:
//            - add the LETTER_VALUES letter value to the 'points' variable.
//          - END IF CLAUSE
//        - END Iteration
//      - END iteration
//      - Return the 'points' variable.


'use strict';

class Scrabble {
  static LETTER_VALUES = { 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1,
                           'N': 1, 'R': 1, 'S': 1, 'T': 1, 'D': 2, 'G': 2,
                           'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4,
                           'V': 4, 'W': 4, 'Y': 4, 'K': 5, 'J': 8, 'X': 8,
                           'Q': 10, 'Z': 10};

  constructor(word) {
    this.word = word;
  }

  static score(wordString) {
    let points = 0;
    let word = '';
    if (wordString) {
      word = wordString.toUpperCase();
    }

    [].forEach.call(word, char => {
    Object.keys(Scrabble.LETTER_VALUES).forEach(key => {
        if (char === key) points += Scrabble.LETTER_VALUES[key];
      });
    });

    return points;
  }

  score() {
    return Scrabble.score(this.word);
  }

}




module.exports = Scrabble;
