function regularEndings(final, centNum) {
  switch (centNum[centNum.length - 1]) {
    case '1':
      final = centNum + 'st';
      break;
    case '2':
      final = centNum + 'nd';
      break;
    case '3':
      final = centNum + 'rd';
      break;
    default:
      final = centNum + 'th';
  }
  return final;
}

function century(year) {
  let centNum = String(Math.ceil(year / 100));
  let centArray = centNum.split('');
  let last2Digits = Number(centArray.slice(centArray.length - 2).join(''));
  let final = '';

  if (last2Digits > 10 && last2Digits < 20) {
    final = centNum + 'th';
  } else {
    final = regularEndings(final, centNum);
  }

  return final;
}


century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
