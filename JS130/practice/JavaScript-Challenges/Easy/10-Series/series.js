// PEDAC
// Understanding the Problem:
//  - Given a string, return an array of all the possible consecutive number
//    series of a specified length.
//  Explicit:
//  - Return an array of nested arrays of length specified.
//  Implicit:
//  - Leading zeros are counted.
//  - If the specified length is longer than the string, throw an error.

// Algorithm:
//  - if the specified length is longer than the string length, throw an error.
//  - Create a new result variable that is an empty array.



'use strict';

class Series {
  constructor(numString) {
    this.numString = numString;
  }

  slices(length) {
    if (length > this.numString.length) {
      throw new Error('invalid length');
    }

    let result = [];
    let numArr = this.splitToNumArr();

    for (let idx = 0; idx < this.numString.length - length + 1; idx += 1) {
      result.push(numArr.slice(idx, idx + length));
    }

    return result;

  }

  splitToNumArr() {
    return this.numString.split('').map(num => Number(num));
  }
}

module.exports = Series;
