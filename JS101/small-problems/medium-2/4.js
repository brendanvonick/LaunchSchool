const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
              "Friday", "Saturday"];

const DAYS_IN_MONTHS = { January: 31, February: 28, March: 31, April: 30,
                         May: 31, June: 30, July: 31, August: 31, September: 30,
                         October: 31, November: 30, December: 31 };

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function fridayThe13ths(year) {
  let count = 0;

  if (isLeapYear(year)) {
    DAYS_IN_MONTHS.February = 29;
  }

  MONTHS.forEach(month => {
    for (let dayNum = 1; dayNum <= DAYS_IN_MONTHS[month]; dayNum += 1) {
      let day = new Date(`${month} ${dayNum}, ${year}`);
      if (day.getDay() === 5 && dayNum == 13) {
        count += 1;
      }
    }

  });

  return count;
}


fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
