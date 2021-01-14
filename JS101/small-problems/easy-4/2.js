const readline = require('readline-sync');
const array = [];

console.log(`Enter the 1st number:`);
array.push(readline.question());

console.log(`Enter the 2nd number:`);
array.push(readline.question());

console.log(`Enter the 3rd number:`);
array.push(readline.question());

console.log(`Enter the 4th number:`);
array.push(readline.question());

console.log(`Enter the 5th number:`);
array.push(readline.question());

console.log(`Enter the last number:`);
const LAST_NUM = readline.question();

if (array.includes(LAST_NUM)) {
  console.log(`The number ${LAST_NUM} appears in ${array.join()}.`);
} else {
  console.log(`The number ${LAST_NUM} does not appear in ${array.join()}.`);
}

/*
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/
