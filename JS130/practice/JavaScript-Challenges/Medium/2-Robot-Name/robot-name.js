// PEDAC
// Understanding the Problem:
//  - Write a program that creates robots. The robots have no name when they
//    are created, but when they are booted a random name is generated.
//  - The random name consists of 2 capital letters and 3 numbers.
//  - Names must not collide. No robot can have the same name as another.



'use strict';

class Robot {
  static ROBOT_NAMES = [];

  constructor() {
    this.robName = this._returnNewName();
    Robot.ROBOT_NAMES.push(this.robName);
  }

  reset() {
    let name = this._returnNewName();
    this.robName = name;
    Robot.ROBOT_NAMES.push(this.robName);
  }

  name() {
    return this.robName;
  }

  _returnNewName() {
    let name = this._randomizeName();
    while (this._validateName(name)) {
      name = this._randomizeName();
    };

    return name;
  }

  _validateName(name) {
    return Robot.ROBOT_NAMES.includes(name);
  }

  _randomizeName() {
    let numbers = '0123456789';
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let name = '';
    let idx = 1;
    while (idx < 3) {
      name += letters[Math.floor(Math.random() * letters.length)];
      idx += 1;
    }

    while (idx < 6) {
      name += numbers[Math.floor(Math.random() * numbers.length)];
      idx += 1;
    }

    return name;
  }
}

module.exports = Robot;
