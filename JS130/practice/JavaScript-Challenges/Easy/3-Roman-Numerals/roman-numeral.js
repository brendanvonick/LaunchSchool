// Understanding the Problem:
//  - write code that transforms modern numbers into their roman numeral
//    equivalent.
//  - I: 1
//  - V: 5
//  - X: 10
//  - L: 50
//  - C: 100
//  - D: 500
//  - M: 1000
//  Examples:
//  - 2000: MM
//  - 8: VIII
//  - 9: IX
//  - 4: IV
//  - 900: CM
//  - 90: XC
// Roman numerals are written by expressing each digit separately starting
// with the left most digit and skipping any digit with a value of zero.


'use strict';


class RomanNumeral {
  static ROMANS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  constructor(modernNum) {
    this.number = modernNum;
  }

  toRoman() {
    let result = '';
    let numArr = this._returnNumArray();
    let romanKeys = Object.keys(RomanNumeral.ROMANS);

    numArr.forEach(number => {
      romanKeys.forEach(numeral => {
        while (Math.floor(number / RomanNumeral.ROMANS[numeral]) >= 1) {
          let count = Math.floor(number / RomanNumeral.ROMANS[numeral]);
          result += (numeral.repeat(count));
          number -= RomanNumeral.ROMANS[numeral] * count;
        }
      });
    });

    return result;
  }

  _returnNumArray() {
    let number = this.number;
    let numArr = [];
    let multiplier = 1;


    while (number > 0) {
      let element = number % (10 * multiplier);
      number -= element;
      numArr.unshift(element);
      multiplier *= 10;
    }

    return numArr;
  }
}

module.exports = RomanNumeral;
