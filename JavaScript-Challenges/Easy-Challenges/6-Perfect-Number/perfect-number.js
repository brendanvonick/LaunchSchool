// The Greek mathematician Nicomachus devised a classification scheme for
// natural numbers (1, 2, 3, ...), identifying each as belonging uniquely to
// the categories of abundant, perfect, or deficient based on a comparison
// between the number and the sum of its positive divisors (the numbers that
// can be evenly divided into the target number with no remainder, excluding
// the number itself). For instance, the positive divisors of 15 are 1, 3, and
// 5. This sum is known as the Aliquot sum.
//
// Perfect numbers have an Aliquot sum that is equal to the original number.
// Abundant numbers have an Aliquot sum that is greater than the original number.
// Deficient numbers have an Aliquot sum that is less than the original number.
// Examples:
//
// 6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
// 28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 +
//  4 + 7 + 14 = 28.
// 15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9
//  which is less than 15.
// 24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and
//  1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
// Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.
// Write a program that can tell whether a number is perfect, abundant, or
//  deficient.


// PEDAC
// Understanding the Problem:
//  - An aliquot sum is the sum of the positive, whole number divisors that can
//    be evenly divided into the target number with no remainder.
//  - Perfect numbers have an Aliquot sum that is equal to the original number.
//  - Abundant numbers have an Aliquot sum that is greater than the original number.
//  - Deficient numbers have an Aliquot sum that is less than the original number.

// Explicit Requirements:
//  - Determine whether a number is a perfect number, an abundant number or a
//    deficient number.
//  - If the number is invalid, throw an error.

// Data Structure:
//  - Class PerfectNumber:
//    - Contains no instance properties.
//    - must contain a static method 'classify'
//  - classify static method:
//    - evauluates whether a a number passed to it as an argument is perfect,
//      abundant or deficient.
//  - isInvalid static method:
//    - Determines whether a number passed to it is invalid, negative or not a
//      whole number.

// Algorithm:
//  - SET Class PerfectNumber:
//  - SET Empty constructor method
//  - SET classify static method that takes one number argument
//    - SET new 'divisors' to an empty array
//    - IF Clause: If the number passed as an argument is invalid
//      - throw new error
//    - END Clause
//    - ITERATE from index of 1 up until number argument / 2 rounded up.
//      - IF Clause: if number argument % index is 0:
//        - Push index to the 'divisors' array
//      - END Clause
//    - END Iteration
//    - SET new 'sum' variable to be the added values of the divisors elements
//    - IF Clause: If 'sum' variable < number argument:
//      - return 'deficient'
//    - ELSE IF Clause: If 'sum' variable === number argument:
//      - return 'perfect'
//     ELSE Clause:
//      - return 'abundant'
//  - SET isInvalid static method
//    - return number argument passed to method < 0 OR number argument is not an
//      integer

'use strict';


class PerfectNumber {

  static classify(number) {
    let divisors = [];
    if (PerfectNumber.isInvalid(number)) {
      throw new error('Invalid number supplied');
    };

    for (let idx = 1; idx <= Math.ceil(number / 2); idx += 1) {
      if (number % idx === 0) divisors.push(idx);
    };

    let sum = divisors.reduce((accum, element) => accum + element, 0);

    if (sum < number) {
      return 'deficient';
    } else if (sum === number) {
      return 'perfect';
    } else {
      return 'abundant';
    }
  }

  static isInvalid(number) {
    return number < 0 || !Number.isInteger(number);
  }
}


module.exports = PerfectNumber;
