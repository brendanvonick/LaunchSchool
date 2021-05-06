// Write a program that manages robot factory settings.
//
// When robots come off the factory floor, they have no name. The first time
// you boot them up, a random name is generated, such as RX837 or BC811.
//
// Every once in a while, we need to reset a robot to its factory settings,
// which means that their name gets wiped. The next time you ask, it will
// respond with a new random name.
//
// The names must be random; they should not follow a predictable sequence.
// Random names means there is a risk of collisions. Your solution should not
// allow the use of the same name twice when avoidable.


'use strict'


class Robot {
  static robotNames = [''];
  static LETTERS = 'ABC';
  static NUMBERS = '0123456789';

  constructor() {
    this.distinctName = this.generateNewName();
  }

  name() {
    return this.distinctName;
  }

  generateNewName() {
    let newName = '';

    while (this.validateName(newName)) {
      newName = this.generateName();
    }

    Robot.robotNames.push(newName);

    return newName;

  }

  generateName() {
    let newName = '';

    for (let idx = 1; idx <= 2; idx += 1) {
      newName += Robot.LETTERS[Math.floor(Math.random() * Robot.LETTERS.length)];
    }

    for (let idx = 1; idx <= 3; idx += 1) {
      newName += Robot.NUMBERS[Math.floor(Math.random() * Robot.NUMBERS.length)];
    }

    return newName;
  }

  reset() {
    this.distinctName = this.generateNewName();
  }

  validateName(name) {
    return Robot.robotNames.includes(name)
  }
}


module.exports = Robot;
