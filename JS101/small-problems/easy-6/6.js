function sequence(num) {
  let arr = [];
  for (let element = 1; element <= num; element += 1) {
    arr.push(element);
  }
  return arr;
}


sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
