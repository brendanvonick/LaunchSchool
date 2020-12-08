// Mortgage Calculator Program

const readline = require('readline-sync');
let loanAmount = '';
let apr = '';
let loanDurationYears = '';
let response = '';

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' ||
         Number(number) <= 0 ||
         Number.isNaN(Number(number));
}

function invalidAnswer(answer) {
  return answer.trim() !== 'yes' && answer.trim() !== 'no';
}

function promptLoanAmount() {
  prompt('Please enter the loan amount.');
  loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Please enter a positive number as the total loan amount.');
    loanAmount = readline.question();
  }
}

function promptAPR() {
  prompt('What is the annual percentage rate, as a percent greater than 0.');
  apr = readline.question();

  while (invalidNumber(apr)) {
    prompt('Please enter a positive number as the annual percentage rate');
    apr = readline.question();
  }
}

function promptLoanDuration() {
  prompt('Please enter the loan duration, in years.');
  loanDurationYears = readline.question();

  while (invalidNumber(loanDurationYears)) {
    prompt('Please enter a positive number for the loan duration in years.');
    loanDurationYears = readline.question();
  }
}

function promptAnotherCalculation() {
  prompt('Would you like to perform another calculation (yes/no)?');
  response = (readline.question()).toLowerCase();

  while (invalidAnswer(response)) {
    prompt('please enter "yes" for yes, or "no" for no.');
    response = (readline.question()).toLowerCase();
  }
}

prompt('Welcome to the mortgage calculator!\n');

while (true) {
  promptLoanAmount();

  promptAPR();

  promptLoanDuration();

  let loanDurationMonths = Number(loanDurationYears) * 12;
  let monthlyRate = (Number(apr) / 100) / 12;

  let monthlyPayment = Number(loanAmount) *
      (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDurationMonths))));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  promptAnotherCalculation();

  if (response === 'no') {
    break;
  }
}
