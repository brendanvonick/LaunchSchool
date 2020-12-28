let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subArray => {
  return subArray.filter(element => {
    if (element % 3 === 0) {
      return element;
    }
  });
});

console.log(newArr);
