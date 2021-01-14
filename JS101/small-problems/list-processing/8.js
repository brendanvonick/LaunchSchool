function buyFruit(arr) {
  let result = [];

  arr.forEach(element => {
    do {
      result = result.concat(element[0]);
      element[1] -= 1;
    } while (element[1] > 0)
  });
  return result;
}



console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
