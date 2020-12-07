// Mortgage Calculator Program

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0 ||
         Number.isNaN(Number(number));
}

prompt('Welcome to the mortgage calculator!\n');

while (true) {
  prompt('Please enter the loan amount.');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Please enter a positive number as the total loan amount.');
    loanAmount = readline.question();
  }

  prompt('What is the annual percentage rate, as a percent greater than 0.');
  let apr = readline.question();

  while (invalidNumber(apr)) {
    prompt('Please enter a positive number as the annual percentage rate');
    apr = readline.question();
  }

  prompt('Please enter the loan duration, in years.');
  let loanDurationYears = readline.question();

  while (invalidNumber(loanDurationYears)) {
    prompt('Please enter a positive number for the loan duration in years.');
    loanDurationYears = readline.question();
  }

  let loanDurationMonths = Number(loanDurationYears) * 12;
  let monthlyRate = (Number(apr) / 100) / 12;

  let monthlyPayment = Number(loanAmount) *
      (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDurationMonths))));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  prompt('Would you like to perform another calculation (y/n)?');
  let response = (readline.question()).toLowerCase();
  while (response[0] !== 'y' && response[0] !== 'n') {
    prompt('please enter "y" for yes, or "n" for no.');
    response = (readline.question()).toLowerCase();
  }

  if (response === 'n') {
    break;
  }
}
