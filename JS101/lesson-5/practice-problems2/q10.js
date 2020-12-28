let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => {
      return Number(b) - Number(a);
    });
  }

  if (typeof subArray[0] === 'string') {
    return subArray.slice().sort((a, b) => {
      if (b > a) {
        return 1;
      } else if (b < a) {
        return -1;
      } else {
        return 0;
      }
    });
  }
});

console.log(newArr);
