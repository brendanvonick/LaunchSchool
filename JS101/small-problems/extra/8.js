// Requirements:
// all given values are greater than 0
// Rount answers to the nearest 0.1
// number steps determined by tower height divided by stair height
// last steps length must be counted to complete the journey
// 1st argument is height, 2nd argument is length, last argument is tower height

// Given 3 numbers,
// determine number of steps by dividing height of tower by height of step
// multiply the number of steps by the length of each step and save to variable
// add on the height of the tower (total vertical distance traveled) to the new variable (total horizontal distance traveled)
// round result to 0.1

function totalDistance(stepHt, length, towerHt) {
  let stepCount = towerHt / stepHt;
  let horizontalDistance = stepCount * length;

  return (horizontalDistance + towerHt).toFixed(1);
}



totalDistance(0.2, 0.4, 100.0) // => 300.0
// Total distance is 300.

totalDistance(0.3, 0.2, 25.0) // => 41.7

totalDistance(0.1, 0.1, 6.0) // => 12.0
