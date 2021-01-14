function sum(num) {
  let arr = String(num).split('');
  let total = 0;

  arr.forEach(element => {
    total += Number(element);
  });
  return total;
}



sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
