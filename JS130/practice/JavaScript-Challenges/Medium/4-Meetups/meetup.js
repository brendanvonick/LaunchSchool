// Understanding the Problem:
//  Explicit Reqs:
//  - Construct objects that represent a meetup date.
//  - Each object takes a month, number 1-12 and a year (ex. 2021)
//  - Determine the exact date of the meeting in the specified month and year.
//  - Descriptors given strings: 'first', 'second', 'third', 'fourth', 'fifth',
//    'last', 'teenth'. Case of the strings is not important.
//  - 'teenth' represents 13th - 19th.
//  - Days of the week are given by strings:  'Monday', 'Tuesday', 'Wednesday',
//    'Thursday', 'Friday', 'Saturday', and 'Sunday'. Again case isn't
//    important.
//  Implicit Reqs:
//  - year and month numbers are entered into the constructor method as args
//    when creating a new meetup object.
//  - 'day' method takes a date as a string and a descriptor as a string, and
//    returns a date object with the toString method called.

'use strict';

class Meetup {
  static DAYS = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
  }

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  day(dayString, descriptor) {
    dayString = dayString.toLowerCase();
    descriptor = descriptor.toLowerCase();
    let dayNum = Meetup.DAYS[dayString];
    let datesArray = this._returnDatesArray(dayNum);
    let date = this._determineDate(datesArray, descriptor);
    return date;
  }

  _determineDate(datesArray, descriptor) {
    let result;
    switch (descriptor) {
      case 'first':
        result =  datesArray[0];
        break;
      case 'second':
        result =  datesArray[1];
        break;
      case 'third':
        result =  datesArray[2];
        break;
      case 'fourth':
        result =  datesArray[3];
        break;
      case 'fifth':
        result =  datesArray[4] ? datesArray[4] : null;
        break;
      case 'last':
        result =  datesArray[datesArray.length - 1];
        break;
      case 'teenth':
        result =  datesArray.filter(date => {
          return [13, 14, 15, 16, 17, 18, 19].includes(date.getDate());
        })[0];
    }

    return result;
  }

  _returnDatesArray(dayNum) {
    let result = [];
    for (let currentDay = 1; currentDay <= 31; currentDay += 1) {
      let date = new Date(this.year, this.month, currentDay);
      if (date.getDay() === dayNum && date.getMonth() === this.month) {
        result.push(date);
      }
    }

    return result;
  }
}

module.exports = Meetup;
