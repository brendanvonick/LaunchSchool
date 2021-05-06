// Create a clock that is independent of date.
//
// You should be able to add minutes to and subtract minutes from the time
// represented by a given clock object. Two clock objects that represent the
// same time should be equal to each other.
//
// You may not use any built-in date or time functionality; just use arithmetic
// operations.



'use strict';

class Clock {
  static hoursInDay = 24;
  static minutesInHour = 60

  constructor(hour, minutes = 0) {
    this.hour = hour;
    this.minutes = minutes;
  }

  static at(hour, minutes) {
    return new Clock(hour, minutes);
  }

  toString() {
    let hour = (this.hour >= 10) ? `${this.hour}` : `0${this.hour}`;
    let minutes = (this.minutes >= 10) ? `${this.minutes}` : `0${this.minutes}`;
    return `${hour}:${minutes}`;
  }

  isEqual(clockObj) {
    if (this.hour === clockObj.hour && this.minutes === clockObj.minutes) {
      return true;
    } else {
      return false;
    }
  }

  add(minutes) {
    let hoursAdded = Math.floor(minutes / Clock.minutesInHour);
    let minutesAdded = minutes % Clock.minutesInHour;

    this.hour += hoursAdded;
    this.minutes += minutesAdded;

    if (this.minutes >= Clock.minutesInHour) {
      hoursAdded = Math.floor(this.minutes / Clock.minutesInHour);
      this.hour += hoursAdded;
      this.minutes = this.minutes % Clock.minutesInHour;
    }

    if (this.hour >= Clock.hoursInDay) {
      this.hour %= Clock.hoursInDay;
    }

    return new Clock(this.hour, this.minutes);
  }

  subtract(minutes) {
    let hoursSubtracted = Math.floor(minutes / Clock.minutesInHour);
    let minutesSubtracted = minutes % Clock.minutesInHour;

    this.hour -= hoursSubtracted;
    this.minutes -= minutesSubtracted;
    
    if(this.minutes < 0) {
      hoursSubtracted = Math.abs(Math.floor(this.minutes / Clock.minutesInHour));
      this.hour -= hoursSubtracted;
      this.minutes = Clock.minutesInHour - (Math.abs(this.minutes) % Clock.minutesInHour);
    }

    if (this.hour < 0) {
      this.hour = Clock.hoursInDay - (Math.abs(this.hour) % Clock.hoursInDay);
    }

    return new Clock(this.hour, this.minutes);
  }
}

module.exports = Clock;
