// The diamond exercise takes as its input a letter, and outputs it in a
//  diamond shape. Given a letter, it prints a diamond starting with 'A', with
//  the supplied letter at the widest point.
//
// The first row contains one 'A'.
// The last row contains one 'A'.
// All rows, except the first and last, have exactly two identical letters.
// The diamond is horizontally symmetric.
// The diamond is vertically symmetric.
// The diamond has a square shape (width equals height).
// The letters form a diamond shape.
// The top half has the letters in ascending order.
// The bottom half has the letters in descending order.
// The four corners (containing the spaces) are triangles.

// Examples

// Diamond for letter 'A':

// A

// Diamond for letter 'C':

//   A
//  B B
// C   C
//  B B
//   A

// Diamond for letter 'E':

//     A
//    B B
//   C   C
//  D     D
// E       E
//  D     D
//   C   C
//    B B
//     A

// PEDAC
//  Understanding the Problem:
//    - Given a letter, create a diamond of letters up to the letter that was
//      provided.
//    - With the exception of 'A', each line should have 2 of the same letters,
//      with repeating spaces to construct a diamond from all the letters used.

//  Algorithm:
//    SET class Diamond.
//    SET static LETTERS property to be a string of all the capital letters in
//      the alphabet.
//    SET static makeDiamond method that takes one argument, a letter string.
//      SET space to be ' '
//      SET

'use strict';

class Diamond {
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static makeDiamond(letter) {
    if (letter === 'A') {
      return 'A\n';
    }

    let str = '';
    let outterSpaces = Diamond.LETTERS.indexOf(letter);
    let innerSpaces = 1;

    str += Diamond.rowA(outterSpaces);
    for (let idx = 1; idx <= Diamond.LETTERS.indexOf(letter); idx += 1) {
      outterSpaces -= 1;
      str += Diamond.row(idx, outterSpaces, innerSpaces);
      innerSpaces += 2;
    }

    innerSpaces -= 2;
    outterSpaces += 1;

    for (let idx = Diamond.LETTERS.indexOf(letter) - 1; idx > 0; idx -= 1) {
      innerSpaces -= 2;
      str += Diamond.row(idx, outterSpaces, innerSpaces);
      outterSpaces += 1;
    }
    str += Diamond.rowA(outterSpaces);

    return str;
  }

  static rowA(outterSpaces) {
    return `${Diamond.spaceRepeat(outterSpaces)}${Diamond.LETTERS[0]}${Diamond.spaceRepeat(outterSpaces)}\n`;
  }

  static row(idx, outterSpaces, innerSpaces) {
    return `${Diamond.spaceRepeat(outterSpaces)}${Diamond.LETTERS[idx]}${Diamond.spaceRepeat(innerSpaces)}` +
           `${Diamond.LETTERS[idx]}${Diamond.spaceRepeat(outterSpaces)}\n`
  }

  static spaceRepeat(spaces) {
    return ' '.repeat(spaces);
  }
}

module.exports = Diamond;
