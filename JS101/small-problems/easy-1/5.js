const readline = require('readline-sync');

console.log('What is the bill?');
let bill = Number(readline.prompt());


console.log('What is the tip percentage?');
let tipPct = Number(readline.prompt());

let tip = bill * (tipPct / 100);
let total = bill + tip;

console.log('');
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);



/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/
