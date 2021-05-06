// Write a program to determine whether a triangle is equilateral, isosceles,
// or scalene.
//
// An equilateral triangle has all three sides the same length.
//
// An isosceles triangle has exactly two sides of the same length.
//
// A scalene triangle has all sides of different lengths.
//
// Note: For a shape to be a triangle at all, all sides must be of length > 0,
// and the sum of the lengths of any two sides must be greater than the length
// of the third side.

// PEDAC
// Understanding the problem:
//  - to be a valid triangle, all sides must have a length > 0
//  - to be a valid triangle, the sum of the lengths of any 2 sides must be
//    greater than the length of the remaining side
//  - An equilateral triangle has all 3 sides the same length
//  - An isosceles triangle has exactly 2 sides of the same length
//  - A scalene triangle has all sides of different lengths


class Triangle {
  constructor(side1, side2, side3) {
    this.sides = Array.from(arguments);
    this.sides.forEach(side => {
      if (side <= 0) {
        throw new Error('a side is less than or equal to 0');
      }
    });

    this.longSide = [...this.sides].sort((a, b) => b - a).shift();

    this.shortSides = [...this.sides].sort((a, b) => b - a);
    this.shortSides.shift();

    if (this.shortSides.reduce((accum, elem) => accum + elem, 0) <= this.longSide) {
      throw new Error('The sum of the length of 2 sides must be greater than or equal to that of the third');
    }

    this.shortSide1 = this.shortSides[0];
    this.shortSide2 = this.shortSides[1];

  }

  kind() {
    if (this.isEquilateral()) {
      return 'equilateral';
    } else if (this.isIsosceles()) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  isEquilateral() {
    return this.shortSide1 === this.shortSide2 && this.shortSide2 ===this.longSide;
  }

  isIsosceles() {
    let sidesCopy = [...this.sides];
    let side1 = sidesCopy.splice(0, 1)[0];
    if (sidesCopy.includes(side1)) {
      return true;
    }
    let side2 = sidesCopy.splice(0, 1)[0];
    if (sidesCopy.includes(side2)) {
      return true;
    }

    return false;
  }
}

let triangle = new Triangle(5, 4, 2);
console.log(triangle.sides)
console.log(triangle.longSide);
console.log(triangle.shortSides);

module.exports = Triangle;
// let triangle2 = new Triangle(0, 1, 2);
