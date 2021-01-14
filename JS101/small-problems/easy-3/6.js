const readline = require('readline-sync');
console.log('Enter a noun: ');
const noun = readline.question();
console.log('Enter a verb: ');
const verb = readline.question();
console.log('Enter an adjective: ');
const adj = readline.question();
console.log('Enter an adverb: ');
const adv = readline.question();

console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious! ` +
            `The ${adj} ${noun} ${verb}s ${adv} over the lazy dog. ` +
            `The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`);





/*
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/
