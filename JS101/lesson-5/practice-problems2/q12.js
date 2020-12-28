let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subArray => {
  return subArray.filter(element => {
    return element % 3 === 0;
  });
});

console.log(newArr);

/*
return subArray.filter(element => {
  if (subArray[element] % 3 === 0) {
    return subArray[element];
  }
});
*/
