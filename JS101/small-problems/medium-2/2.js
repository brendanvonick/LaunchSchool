

function isInvalid(side1, side2, side3) {
  let shortSides = [];
  let longSide = [];

  side1 <= side2 || side1 <= side3 ? shortSides.push(side1) : longSide.push(side1);
  side2 <= side2 || side2 <= side3 ? shortSides.push(side2) : longSide.push(side2);
  side3 <= side1 || side3 <= side2 ? shortSides.push(side3) : longSide.push(side3);

  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return true;
  } else if (shortSides[0] + shortSides[1] <= longSide[0]) {
    return true;
  } else {
    return false;
  }
}

function isEquilateral(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    return true;
  }
}

function isIsosceles(side1, side2, side3) {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
    return true;
  }
}

function triangle(side1, side2, side3) {
  if (isInvalid(side1, side2, side3)) {
    return 'invalid';
  } else if (isEquilateral(side1, side2, side3)) {
    return 'equilateral';
  } else if (isIsosceles(side1, side2, side3)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}


triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
