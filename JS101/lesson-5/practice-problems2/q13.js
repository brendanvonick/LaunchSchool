let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1).reduce((y, next) => y + next);
  let oddSumB = b.filter(num => num % 2 === 1).reduce((y, next) => y + next);

  return oddSumA - oddSumB;
});

console.log(arr);
