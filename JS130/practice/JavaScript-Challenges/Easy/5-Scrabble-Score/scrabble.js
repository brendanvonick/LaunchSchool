// PEDAC

// Understanding the Problem:
// - write a program that, given a word, computes the scrabble score for the word.
// - To compute the score, add up the points for each character in a word.
// - Scores should be computed from the following characters score counts:
// A, E, I, O, U, L, N, R, S, T:	1
// D, G:	2
// B, C, M, P:	3
// F, H, V, W, Y:	4
// K:	5
// J, X:	8
// Q, Z:	10
//
// Explicit:
//  - only alphabetic characters count towards scoring.
//
// Implicit:
//  - Spaces and space characters do not count as points.
//  - case insensitive.

// Algorithm:
//  - Create a class Scrabble.
//  - Create a constructor method that takes a string argument as the word to
//    be calculated.
//  - Create a static property with the scores for each letter.
//  - Create an instance method named score that evaluates the score of the
//    word passed into the constructor method.

'use strict'

class Scrabble {
  static POINT_VALUES = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  };

  constructor(word) {
    this.word = (word) ? word.toUpperCase(): '';
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    let score = 0;

    if (this._validateWord()) {
      return score;
    }

    let wordArr = this.word.split('');
    wordArr.forEach(letter => {
      Object.keys(Scrabble.POINT_VALUES).forEach(key => {
        if (Scrabble.POINT_VALUES[key].includes(letter)) {
          score += Number(key);
        }
      });
    });

    return score;
  }

  _validateWord() {
    return !(this.word.match(/^[A-Z]+$/));
  }

}

module.exports = Scrabble;
