
const readline = require('readline-sync');
const CHOICE_OPTIONS = ['r for rock', 'p for paper', 'sc for scissors',
  'l for lizard', 'sp for spock'];
const VALID_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];
let playerWins = 0;
let computerWins = 0;
const WINNING_SCORE = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

function minimizeChoice(selection) {
  let smallChoice = '';
  if (selection.substring(0, 1).includes('r')) {
    smallChoice = 'r';
  } else if (selection.substring(0, 1).includes('p')) {
    smallChoice = 'p';
  } else if (selection.substring(0, 2).includes('sc')) {
    smallChoice = 'sc';
  } else if (selection.substring(0, 1).includes('l')) {
    smallChoice = 'l';
  } else if (selection.substring(0, 2).includes('sp')) {
    smallChoice = 'sp';
  }
  return smallChoice;
}

function playerWinsOptions(choice, computerChoice) {
  return ((choice === 'r' && computerChoice === 'sc') ||
          (choice === 'r' && computerChoice === 'l') ||
          (choice === 'p' && computerChoice === 'r') ||
          (choice === 'p' && computerChoice === 'sp') ||
          (choice === 'sc' && computerChoice === 'p') ||
          (choice === 'sc' && computerChoice === 'l') ||
          (choice === 'l' && computerChoice === 'p') ||
          (choice === 'l' && computerChoice === 'sp') ||
          (choice === 'sp' && computerChoice === 'sc') ||
          (choice === 'sp' && computerChoice === 'r'));
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (playerWinsOptions(choice, computerChoice)) {
    playerWins += 1;
    prompt(`You win!\n=> You: ${playerWins}, Computer: ${computerWins}`);
  } else if (choice === computerChoice) {
    prompt(`It's a tie.\n=> You: ${playerWins}, Computer: ${computerWins}`);
  } else {
    computerWins += 1;
    prompt(`Computer wins!\n=> You: ${playerWins}, Computer: ${computerWins}`);
  }
}

function noOneWins() {
  return (playerWins < WINNING_SCORE) && (computerWins < WINNING_SCORE);
}

prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock');
prompt('You are playing the computer in an exhibition match.');
prompt(`Reach ${WINNING_SCORE} wins first to achieve victory.`);

while (noOneWins()) {
  prompt(`Choose one: ${CHOICE_OPTIONS.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice.substring(0, 1)) &&
         !VALID_CHOICES.includes(choice.substring(0, 2))) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  console.clear();
  displayWinner(minimizeChoice(choice), computerChoice);
}

prompt('');
prompt(`Final Score! You: ${playerWins}, Computer: ${computerWins}`);
prompt('Thank you for playing.');
