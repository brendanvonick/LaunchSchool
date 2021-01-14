function twice(number) {
  let array = String(number).split('');
  let arrayHalf1 = array.slice(0, array.length / 2);
  let arrayHalf2 = array.slice(array.length / 2, array.length);
  let numHalf1 = Number(arrayHalf1.join(''));
  let numHalf2 = Number(arrayHalf2.join(''));

  if (numHalf1 === numHalf2) {
    return number;
  } else {
    return number * 2;
  }
}



twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
