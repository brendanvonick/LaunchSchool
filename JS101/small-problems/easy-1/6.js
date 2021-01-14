const readline = require('readline-sync');

function add(number) {
  let total = 0
  for (let int = 1; int <= number; int += 1) {
    total += int;
  }
  return total;
}

function multiply(number) {
  let total = 1
  for (let int = 1; int <= number; int += 1) {
    total *= int;
  }
  return total;
}

console.log('Please enter an integer greater than 0:');
let number = Number(readline.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let answer = readline.prompt();

let sum = add(number);

let product = multiply(number);

if (answer === 's') {
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (answer === 'p') {
  console.log(`The product of the integers between 1 and ${number} is ${product}.`);
}




/*
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
*/

/*
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/
