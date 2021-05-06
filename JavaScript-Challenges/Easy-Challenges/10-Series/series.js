//  Write a program that will take a string of digits and return all the possible
//  consecutive number series of a specified length in that string.
//
//  For example, the string "01234" has the following 3-digit series:
//
//  012
//  123
//  234
//  Likewise, here are the 4-digit series:
//
//  0123
//  1234
//  Finally, if you ask for a 6-digit series from a 5-digit string, you should
//  throw an error.

// PEDAC
// Understanding the Problem:
//  - Given a string of digits provided to the class as an argument when a new
//    instance is created, return all the array possibilities of a series of
//    numbers in that string of the length provided when calling 'slices' method.
//  - If a series length provided is longer than the length of the string of
//    digits initially provided, throw an error.

// Algorithm:
//  SET class Series
//    SET constructor method with a single parameter, 'numString'
//      SET this.numString to be the value of numString
//    SET slices method with 1 parameter, seriesLength
//      IF Clause: If isInvalid method returns true (seriesLength as an argument):
//        Throw an error with message 'The series length can't be longer than the string of digits'.
//      END Clause
//
//    SET isInvalid method with seriesLength parameter.
//      IF Clause: if seriesLength is longer than this.numString
//        Return true
//      End If Clause

'use strict';

class Series {
  constructor(numString) {
    this.numString = numString;
  }

  slices(seriesLength) {
    if (this.isInvalid(seriesLength)) {
      throw new Error("The series length can't be longer than the string of digits");
    }

    let result = [];
    let numArray = this.numString.split('').map(char => {
      return Number(char);
    });

    let seriesCount = numArray.length - seriesLength + 1;

    for (let idx = 0; idx < seriesCount; idx += 1) {
      result.push(numArray.slice(idx, idx + seriesLength));
    }

    return result;
  }

  isInvalid(seriesLength) {
    if (seriesLength > this.numString.length) {
      return true;
    }
  }
}



module.exports = Series;
