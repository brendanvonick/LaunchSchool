//  Write a program that, given a natural number and a set of one or more other
//  numbers, can find the sum of all the multiples of the numbers in the set
//  that are less than the first number. If the set of numbers is not given,
//  use a default set of 3 and 5.
//
// For instance, if we list all the natural numbers up to, but not including,
//  20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and
//  18. The sum of these multiples is 78.

// PEDAC
// Understanding the Problem:
//  - Given a number, and a potential other set of numbers, find the sum of all
//    numbers and multiples of those numbers in the set less than the initial
//    number.
//  - If no set of numbers is provided when creating the instance, the defaults
//    are 3 and 5.
//  - Also, if no numbers are provided when creating the instance, a static
//    method is used instead.


// Algorithm:


class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = (multiples.length > 0) ? multiples : [3, 5];
  }

  static to(num) {
    let obj = new SumOfMultiples();
    return obj.to(num);
  }

  to(num) {
    let addends = [];

    for (let currentNum = 1; currentNum < num; currentNum++) {
      if (this.anyMultiple(currentNum)) {
        addends.push(currentNum);
      }
    }

    return addends.reduce((acc, addend) => acc + addend, 0);
  }

  anyMultiple(num) {
    return this.multiples.some(multiple => {
      return num % multiple === 0;
    });
  }
}

module.exports = SumOfMultiples;
