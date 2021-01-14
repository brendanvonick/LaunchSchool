function multiplicativeAverage(array) {
  let value = 1;

  array.forEach(element => {
    value *= element;
  });
  return (value / array.length).toFixed(3);
}


multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
