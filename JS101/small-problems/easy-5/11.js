function positive(number) {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;

  if (minutes < 10) {
    minutes = String(`0${minutes}`);
  }

  if (hours < 10) {
    hours = String(`0${hours}`);
  }
  return `${hours}:${minutes}`;
}

function negative(number) {
  let hours = 24 + Math.floor(number / 60);
  let minutes = 60 + (number % 60);

  if (minutes < 10) {
    minutes = String(`0${minutes}`);
  }

  if (hours < 10) {
    hours = String(`0${hours}`);
  }
  return `${hours}:${minutes}`;
}


function timeOfDay(num) {
  let time = '';

  if (num > 1440 || num < -1440) {
    num = num % 1440;
  }

  num >= 0 ? time = positive(num) : time = negative(num);

  return time;
}




console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
