function swapCase(string) {
  let arr = string.split('');
  let newArr = [];

  arr.forEach(element => {
    if (element === element.toUpperCase()) {
      newArr.push(element.toLowerCase());
    } else if (element === element.toLowerCase()) {
      newArr.push(element.toUpperCase());
    }
  });

  return newArr.join('');
}


swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
