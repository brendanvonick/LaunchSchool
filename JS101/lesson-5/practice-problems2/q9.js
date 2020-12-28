let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => {
      return Number(a) - Number(b);
    })
  } else {
    return subArray.slice().sort();
  }
});

console.log(newArr);
