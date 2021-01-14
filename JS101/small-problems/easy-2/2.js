const readline = require('readline-sync');

function greeting() {
  console.log('What is your name?');
  let name = readline.prompt();

  if (name[name.length - 1] === '!') {
    name = name.slice(0, name.length - 1);
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`)
  } else {
    console.log(`Hello ${name}.`);
  }
}

greeting();


/*
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/
