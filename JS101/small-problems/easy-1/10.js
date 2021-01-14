function multisum (number) {
  let numbersDivBy3Or5 = [];
  for (let value = 2; value <= number; value += 1) {
    if ((value % 3 == 0) || (value % 5 === 0)) numbersDivBy3Or5.push(value);
  }

  let sum = 0;
  for (let index = 0; index < numbersDivBy3Or5.length; index += 1) {
    sum += numbersDivBy3Or5[index];
  }

  return sum;
}




multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
