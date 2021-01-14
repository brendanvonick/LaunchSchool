const MAX_VALUE = 9876543201;

function hasMultiples(num) {
  let arr = String(num).split('');
  let value = '';
  while (arr.length > 0) {
    value = arr.pop();
    if (arr.includes(value)) {
      return true;
    }
  }
  return false;
}

function featured(num) {
  let initialArr = [];
  for (let value = num + 1; value <= num + 7; value += 1) {
    initialArr.push(value);
  }

  let modifiedArr = initialArr.filter(element => {
    return element % 7 === 0;
  });

  let value = modifiedArr[0];

  while (true) {
    if (hasMultiples(value) || value % 2 === 0) {
      value += 7;
    } else {
      return value;
    }

    if (value > MAX_VALUE) {
      return 'There is no possible number that fulfills those requirements.';
    }
  }
}



featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
