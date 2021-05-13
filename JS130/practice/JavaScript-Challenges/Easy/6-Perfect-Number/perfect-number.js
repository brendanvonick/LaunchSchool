// PEDAC
// Understanding the Problem:
//  Explicit Reqs:
//  - Write a program that tells whether a number is perfect, abundant, or
//    deficient.
//  - An aliquot sum is the the sum of a numbers' positive divisors (not
//    including itself, but including 1).
//  - perfect numbers: have an aliquot sum that is equal to the original number.
//  - abundant numbers: have an aliquot sum that is greater than the original
//    number.
//  - deficient numbers: have an aliquot sum that is less than the original
//    number.
//  - prime numbers are always deficient since their only divisor is 1.
//  Implicit Reqs:
//  - negative numbers raise an error.

// Data structure:
//  - class with number as type number.
//  - returns string, unless a negative number, then raises an exception.

// Algorithm:

'use strict';


class PerfectNumber {
  constructor(number) {
    this.number = number;
    this._validateNumber();
  }

  static classify(number) {
    let perfNumInstance = new PerfectNumber(number);

    return perfNumInstance.classify();
  }

  classify() {
    let divisors = [];

    for (let divisor = 1; divisor < this.number; divisor++) {
      if (this.number % divisor === 0) {
        divisors.push(divisor);
      }
    }

    if (this.isDeficient(divisors)) {
      return 'deficient';
    } else if (this.isPerfect(divisors)) {
      return 'perfect';
    } else {
      return 'abundant';
    }
  }

  isDeficient(divisorsArr) {
    let aliquot = divisorsArr.reduce((a, b) => a + b);
    return aliquot < this.number;
  }

  isPerfect(divisorsArr) {
    let aliquot = divisorsArr.reduce((a, b) => a + b);
    return aliquot === this.number;
  }

  _validateNumber() {
    if (this.number < 0) {
      throw new Error('No negative numbers allowed.');
    }
  }
}

module.exports = PerfectNumber;
