// PEDAC
// Understanding the Problem:
//  Explicit Reqs:
//  - For a shape to be a a triangle, all sides must be of length > 0
//  - The sum of the lengths of any 2 sides must be greater than the length of
//    the third side.
//  - Equilateral: all three sides are the same length.
//  - Isosceles: Has exactly 2 sides of the same length.
//  - Scalene: Has all sides of different lengths.
//  Implicit Reqs:
//  - If the side lengths do no create a valid triangle, throw an error upon
//    creation.

// Data Structure:
//  - class 'Triangle'
//    - constructor method takes 3 arguments, numbers representing the 3 sides
//    - 'kind' instance method takes no arguments and returns the type of
//      triangle as a string, all lowercase.

// Algorithm:
//  constructor method:
//  - Save the side lengths to an array instance property.
//  - If the sides are not valid for a triangle, throw an error.
//  isValid method:
//  - If any of the side lengths are less than or equal to 0, return false.
//  - Determine the 2 shortest sides.
//  - If the sum of the 2 shortest sides is less than the length of the 3rd,
//   return false.
//  - return true.
//  kind method:
//  - If the length of all 3 sides are equal, return 'equilateral'
//  - If the length of 2 sides are equal, return 'isosceles'
//  - If the lengths of the 3 sides are all different, return 'scalene'

'use strict';

class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.relativeLengths = this._relativeLengths();
    if (!this.isValid()) {
      throw new Error('Invalid triangle sides.');
    }
  }

  kind() {
    if (this.isEquilateral()) {
      return 'equilateral';
    } else if (this.isScalene()) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }

  isScalene() {
    return this.sides[0] !== this.sides[1] &&
           this.sides[1] !== this.sides[2] &&
           this.sides[0] !== this.sides[2];
  }

  isEquilateral() {
    return this.sides.every(side => side === this.sides[0]);
  }

  isValid() {
    let result = true;
    result = this.sides.every(side => {
      return side > 0;
    });

    result  = (this.relativeLengths.mid + this.relativeLengths.min >
              this.relativeLengths.max);

    return result;
  }

  _relativeLengths() {
    let sidesCopy = [...this.sides];
    let max = -Infinity;
    let min = Infinity;

    sidesCopy.forEach(side => {
      if (side > max) {
        max = side;
      }
    });

    sidesCopy.forEach(side => {
      if (side < min) {
        min = side;
      }
    });

    sidesCopy.splice(sidesCopy.indexOf(min), 1);
    sidesCopy.splice(sidesCopy.indexOf(max), 1);
    let mid = sidesCopy[0];

    return {max, mid, min};
  }
}

module.exports = Triangle;
