// PEDAC
// Understanding the Problem
// Convert Octal to Decimal conversion
// Octal Conversions are evaluated as followed:
// The rightmost digit gets multiplied by 100 = 1
//  The next digit gets multiplied by 101 = 10
//  The digit after that gets multiplied by 102 = 100
//  The digit after that gets multiplied by 103 = 1000
//  ...
//  The n*th* digit gets multiplied by 10n-1.
//  All of these values are then summed.
// Any digit with an 8 or 9 is considered invalid and returns 0.

// Data Structure:
// Use a class with 1 parameter for the number to be converted to octal.
//  The one parameter should be added to the constructor method.
// One method 'toDecimal' which takes 0 arguments and converts the number to
//  decimal.
// Anotehr method 'isInvalid' checks whether a number has an 9 or 9 in it. If
//  so then it is considered invalid and returns true.

// Algorithm:
//  SET Class Octal
//  SET constructor method with 1 parameter: octalNum
//    SET this.octalNum to be octalNum
//  SET isInvalid method with 1 stringNum parameter
//    IF Clause: If stringNum includes '8' or '9'
//      Return true
//    END Clause
//  SET toDecimal method with no parameters.
//    SET new total variable to be 0.
//    SET variable stringNum to be this.octalNum to string.
//    Reverse stringNum
//    IF Clause: if stringNum is inValid (call this.isInvalid method)
//      return 0
//    END If Clause
//    SET reversedNumArray to be stringNum split by character
//    ITERATE over each element of reversedNumArray
//      convert each character to number
//    END Iteration
//    ITERATE over each elemnt of reversedNumArray
//      multiply each number by 8 raised to the index power.
//      Add to total variable
//    END Iteration
//    return total.
'use strict';

class Octal {
  constructor(octalNum) {
    this.octalNum = octalNum;
  }

  isInvalid() {
    if (this.octalNum.includes('8') || this.octalNum.includes('9')) {
      return true;
    } else if (Number.isNaN(Number(this.octalNum))) {
      return true;
    }
  }

  toDecimal() {
    let total = 0;
    let stringNum = this.octalNum;

    if (this.isInvalid()) {
      return 0;
    }

    let reversedStringArray = stringNum.split('').reverse();
    let reversedNumArray = reversedStringArray.map(num => {
      return Number(num);
    });

    reversedNumArray.forEach((num, idx) => {
      total += num * (8 ** idx);
    });

    return total;
  }
}

module.exports = Octal;
