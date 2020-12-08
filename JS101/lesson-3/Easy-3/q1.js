let numbers = [1, 2, 3, 4];

numbers.splice(0, numbers.length);
console.log(numbers);

numbers = [1, 2, 3, 4];

numbers.length = 0;
console.log(numbers);

numbers = [1, 2, 3, 4];

numbers = numbers.filter(element => {
  !numbers[element];
})

console.log(numbers);
