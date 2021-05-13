// PEDAC
// Understanding the Problem:
// - Implement an octal to decimal conversion. Given an octal string, your
//   program should convert a decimal output.
// - Invalid octal numbers should be treated as 0.

// Algorithm
// - Declare a new total variable and set it to 0.
// - split the octal string and reverse it.
// - iterate through the elements of the array:
//    - convert the string to a number.
//    - multiply the number by 8 to the index power and add it to the running total.
// - return the total.


'use strict';

class Octal {
  constructor(octalNum) {
    this.octalNum = octalNum;
  }

  toDecimal() {
    this._validateNum();

    let reversedNumArr = this._convertToNumArr();
    let total = 0;

    for (let idx = 0; idx < reversedNumArr.length; idx += 1) {
      total += reversedNumArr[idx] * (8 ** idx);
    }

    return total;
  }

  _validateNum() {
    if (!(this.octalNum.match(/^\d+$/g)) || this.octalNum.match(/(8|9)/g)) {
      this.octalNum = '0';
    }
  }

  _convertToNumArr() {
    let reversedStrArr = this.octalNum.split('').reverse();
    let reversedNumArr = [];
    reversedStrArr.forEach(numChar => {
      reversedNumArr.push(Number(numChar));
    });

    return reversedNumArr;
  }
}

module.exports = Octal;
