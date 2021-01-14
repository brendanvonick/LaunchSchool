function afterMidnight(time) {
  let timeArray = time.split(':');
  return ((Number(timeArray[0]) * 60) + Number(timeArray[1])) % 1440;
}

function beforeMidnight(time) {
  let timeArray = time.split(':');

  let minutes = 1440 - ((Number(timeArray[0]) * 60) + Number(timeArray[1]));

  return minutes % 1440;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
