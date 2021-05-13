// PEDAC
// Understanding the Problem:
//  Explicit Reqs:
//  - Create a clock that is independent of date.
//  - You should be able to add minutes to and subtract minutes from the time
//    represented by a given clock object.
//  - 2 clock objects that represent the same time should be equal to each
//    other.
//  Implicit Reqs:
//  - Given 2 numbers, 1st representing hours and 2nd representing minutes,
//    convert to a string representing a digital clock.
//  - numbers are provided in the 'at' static method.

// Data Structure:
//  - numbers added are of type number
//  - return value is of type string.
//  - Use a class.

// Algorithm


'use strict';

class Clock {
  static at(hours = 0, minutes = 0) {
    return new Clock(hours, minutes);
  }

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    return `${this.hours < 10 ? `0${this.hours}` : `${this.hours}`}:` +
           `${this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`}`;
  }

  add(addMinutes) {
    this.minutes += addMinutes % 60;
    this.hours += Math.floor(addMinutes / 60);

    if (this.minutes >= 60) {
      this.hours += 1;
      this.minutes %= 60;
    }

    if (this.hours >= 24) {
      this.hours %= 24;
    }

    return Clock.at(this.hours, this.minutes);
  }

  subtract(subMinutes) {
    this.minutes -= subMinutes % 60;
    this.hours -= Math.floor(subMinutes / 60);

    if (this.minutes < 0) {
      this.hours -= 1;
      this.minutes = 60 - Math.abs(this.minutes);
    }

    if (this.hours < 0) {
      let hoursToSubtract = Math.abs(this.hours) % 24;
      this.hours = 24 - hoursToSubtract;
    }

    return Clock.at(this.hours, this.minutes);
  }

  isEqual(otherClock) {
    return (this.toString() === otherClock.toString());
  }

}


module.exports = Clock;
