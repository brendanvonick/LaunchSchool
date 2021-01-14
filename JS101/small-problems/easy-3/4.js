function findFibonacciIndexByLength(number) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
  fibonacci = first + second;
  index += 1;
  first = second;
  second = fibonacci;
} while (String(fibonacci).length < number);

return index;
}




findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

// Don't try any higher values until you read the solution Discussion
