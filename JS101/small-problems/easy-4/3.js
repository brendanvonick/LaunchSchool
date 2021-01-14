const readline = require('readline-sync');
const CURRENT_YEAR = 2021;

console.log('What is your age?');
let age = readline.prompt();

console.log('What age would you like to retire?');
let retireAge = readline.prompt();

let yearsUntilRetire = retireAge - age;

console.log('');
console.log(`It's 2021. You will retire in ${CURRENT_YEAR + yearsUntilRetire}.`);
console.log(`You have only ${yearsUntilRetire} years of work to go!`);


/*
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/
