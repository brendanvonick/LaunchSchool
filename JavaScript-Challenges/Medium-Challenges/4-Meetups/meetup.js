// PEDAC:

// Understanding the Problem:
// Explicit:
// - Meetups happen monthly on the same day of the week.
// - construct objects that represent meetup date.
// - Each object takes a month number (1-12) and a year (eg. 2021).
// - Object should be able to determine the exact date of the meetup in the
//   specified month and year.
// - Descriptors given are 'first', 'second', 'third', 'fourth', 'fifth',
//   'last and 'teenth'.
//    - case of strings is not important.
// - teenth refers to 13th, 14th, 15th, 16th, 17th, 18th, 19th
// - fifth day of the month may not happen every month.
// - days of the week are given by 'Monday', 'Tuesday', 'Wednesday', etc.
//    - case not important.

// Implicit:
// - meetup instances have day method. Returns the new specified date object


// Algorithm:
//


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

  static TEENTH = [13, 14, 15, 16, 17, 18, 19];

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(dayString, descriptor) {
    let day = Meetup.DAYS[dayString.toLowerCase()];
    let monthDates = this._getDaysInMonth(day, dayString);

    switch (descriptor.toLowerCase()) {
      case 'first':
        return monthDates[0];
        break;
      case 'second':
        return monthDates[1];
        break;
      case 'third':
        return monthDates[2];
        break;
      case 'fourth':
        return monthDates[3];
        break;
      case 'fifth':
        if (4 in monthDates) {
          return monthDates[4];
        } else {
          return null;
        }
        break;
      case 'last':
        return monthDates[monthDates.length - 1];
        break;
      case 'teenth':
        return monthDates.filter(date => {
          return Meetup.TEENTH.includes(date.getDate());
        })[0];
        break;
    }
  }

  _getDaysInMonth(day, dayString) {
    let monthDates = [];

    for (let newDay = 0; newDay <= 31; newDay += 1) {
      let date = new Date(this.year, this.month - 1, newDay);
      if (date.getDay() === day && date.getMonth() === this.month - 1) {
        monthDates.push(date);
      }
    }

    return monthDates;
  }

}

module.exports = Meetup;
