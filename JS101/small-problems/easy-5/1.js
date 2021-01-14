function dms(degrees) {
  degreesInt = Math.floor(degrees);
  let minutesFloating = (degrees - degreesInt) * 60;
  let minutesInt = Math.floor(minutesFloating);
  let secondsInt = Math.floor((minutesFloating - minutesInt) * 60);

  if (minutesInt < 10) {
    minutesInt = `0${minutesInt}`;
  }

  if (secondsInt < 10) {
    secondsInt = `0${secondsInt}`;
  }

  let string = `${degreesInt}˚${minutesInt}'${secondsInt}"`;
  return string;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
