let numbers = [1, 2, 3, 4, 5];
numbers.slice().reverse();
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
[...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];

numbers.forEach((number) => {
  reversedNumbers.unshift(number);
});
console.log(reversedNumbers);
