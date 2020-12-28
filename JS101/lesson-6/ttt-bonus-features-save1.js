const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const CHOOSE = 'choose';  // valid options are 'computer', 'player' or 'choose'

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board, playerWins, computerWins) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log(`Reach ${WINNING_SCORE} wins first to achieve victory.`);
  console.log(`Player: ${playerWins}, Computer: ${computerWins}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;


  for (let index = 0; index < WINNING_LINES.length; index ++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (board['5'] === INITIAL_MARKER) {
    square = '5';
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return false;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
      playerWins += 1;
      return `Player: ${playerWins}, Computer: ${computerWins}`
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
      computerWins += 1;
    }
  }

  return null;
}

function joinOr(array, delimiter = ', ', joinWord = 'or') {
  switch (array.length) {
    case 0:
      return '';
    case 1:
      return `${array[0]}`;
    case 2:
      return array.join(` ${joinWord} `);
    default:
      return array.slice(0, array.length - 1).join(delimiter) +
               `${delimiter}${joinWord} ${array[array.length - 1]}`;
  }
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

let board = initializeBoard();

while (true) {
  let playerWins = 0;
  let computerWins = 0;

  function noWinner() {
    return (playerWins < WINNING_SCORE) && (computerWins < WINNING_SCORE);
  }

  displayBoard(board, playerWins, computerWins);

  let whoGoesFirst = '';
  let validPlayerChoices = ['player', 'computer']
  if (CHOOSE === 'choose') {
    prompt('Who would you like to go first? (player/computer)');
    whoGoesFirst = readline.question();
    while (!validPlayerChoices.includes(whoGoesFirst)) {
      prompt('That is not a valid choice for who goes first, please choose (player/computer).');
      whoGoesFirst = readline.question();
    }
  } else if (CHOOSE === 'computer') {
    whoGoesFirst = CHOOSE;
  } else {
    whoGoesFirst = CHOOSE;
  }

  while (noWinner()) {
    let board = initializeBoard();

    if (whoGoesFirst === 'computer') {
      while (true) {
        computerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;

        displayBoard(board, playerWins, computerWins);

        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
      }
    } else if (whoGoesFirst === 'player'){
      while (true) {
        displayBoard(board, playerWins, computerWins);

        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;

        computerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
      }
    }


    displayBoard(board, playerWins, computerWins);

    let returnVictor = '';

    if (someoneWon(board)) {
      returnVictor = `${detectWinner(board)} won!`;
      prompt(returnVictor);
    } else {
      prompt("It's a tie!");
    }

    if (returnVictor === 'Player won!') {
      playerWins += 1;
    } else if (returnVictor === 'Computer won!') {
      computerWins += 1;
    } else {
      playerWins += 0;
    }
  }

  if (playerWins === 5) {
    prompt('You are the overall victor! Congratulations!');
  } else {
    prompt('The computer is the overall victor! Better luck next time!');
  }

  let validResponse = ['y', 'n'];
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase();
  while (!validResponse.includes(answer)) {
    prompt('That is not a valid option. Play again? (y or n)')
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
