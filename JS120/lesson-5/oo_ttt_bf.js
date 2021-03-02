// Nouns: game, board, square, grid, marker, row, player, human, computer
// Verbs: play, mark, move, place

// -Game (n)
// -Board (n)
// -Row (n)
// -Square (n)
// -Marker (n)
// -Player (n)
//    -Mark (v)
//    -Play (v)
//    -Human (n)
//    -Computer (n)

const readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let idx = 1; idx <= 9; idx += 1) {
      this.squares[idx] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ` +
                `${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ` +
                `${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ` +
                `${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.isUnusedSquare(key));
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class Score {
  constructor() {
    this.computer = 0;
    this.human = 0;
  }

  static WINNING_SCORE = 3;

  display() {
    console.log(`You: ${this.human}, Me: ${this.computer}`);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.score = new Score();
    this.firstPlayer = this.human;
  }

  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.playOnce();
      if (!this.matchNotOver()) break;
      this.nextRound();
      this.firstPlayer = this.togglePlayer(this.firstPlayer);
    }

    this.displayGoodbyeMessage();
  }

  playOnce() {
    let currentPlayer = this.firstPlayer;
    this.board.display();

    while (true) {
      this.playerMoves(currentPlayer);
      if (this.roundOver()) break;

      this.board.displayWithClear();
      currentPlayer = this.togglePlayer(currentPlayer);
    }

    this.board.displayWithClear();
    this.scoreIncrementer();
    this.displayResults();
  }

  nextRound() {
    let prompt = "Enter 'y' to proceed to the next round. ";
    let choice = readline.question(prompt).toLowerCase();
    let validChoices = ['y'];

    while (!validChoices.includes(choice)) {
      console.log('That is not a valid choice.');
      choice = readline.question(prompt).toLowerCase();
    }

    this.resetBoard();
  }

  togglePlayer(player) {
    return player === this.human ? this.computer : this.human;
  }

  playerMoves(currentPlayer) {
    if (currentPlayer === this.human) {
      this.humanMoves();
    } else {
      this.computerMoves();
    }
  }

  resetBoard() {
    console.clear();
    console.log('');
    console.log('');
    this.board = new Board();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log(`Welcome to Tic Tac Toe, you are playing in a match to ` +
                `${Score.WINNING_SCORE}!`);
    console.log('');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  }

  scoreIncrementer() {
    if (this.isWinner(this.human)) {
      this.score.human += 1;
    } else if (this.isWinner(this.computer)) {
      this.score.computer += 1;
    }
  }

  displayResults() {
    if (this.isWinner(this.human) && this.score.human === Score.WINNING_SCORE) {
      console.log('You won the match! Congratulations!');
    } else if (this.isWinner(this.human)) {
      console.log('You won that round! Congratulations!');
    } else if (this.isWinner(this.computer) &&
               this.score.computer === Score.WINNING_SCORE) {
      console.log('I won the match! I won! Woohoo!');
    } else if (this.isWinner(this.computer)) {
      console.log('I won that round! Take that, human!');
    } else {
      console.log('A tie game. How boring.');
    }

    if (!this.matchNotOver()) console.log('Final Score:');
    this.score.display();
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt =  `Choose a square (${this.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log('');

    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = this.offensiveComputerMove();

    if (!choice) choice = this.defensiveComputerMove();

    if (!choice) choice = this.pickCenterSquare();

    if (!choice) choice = this.pickRandomSquare();

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  pickRandomSquare() {
    let choice;
    let validChoices = this.board.unusedSquares();

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }

  pickCenterSquare() {
    let centerSquare = '5';
    if (this.board.isUnusedSquare(centerSquare)) {
      return centerSquare;
    } else {
      return null;
    }
  }

  defensiveComputerMove() {
    return this.competitiveMove(this.human);
  }

  offensiveComputerMove() {
    return this.competitiveMove(this.computer);
  }

  competitiveMove(player) {
    for (let index = 0; index < TTTGame.POSSIBLE_WINNING_ROWS.length; ++index) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[index];
      let key = this.competitiveSquare(player, row);
      if (key) return key;
    }

    return null;
  }

  competitiveSquare(player, row) {
    if (this.board.countMarkersFor(player, row) === 2) {
      let index = row.findIndex(key => this.board.isUnusedSquare(key));
      if (index >= 0) return row[index];
    }

    return null;
  }

  joinOr(array, del = ', ', word = 'or') {
    if (array.length === 1) {
      return array[0];
    } else if (array.length === 2) {
      return array.join(` ${word} `);
    } else {
      return `${array.slice(0, array.length - 1).join(del)}${del}${word}` +
                  ` ${array[array.length - 1]}`;
    }
  }

  matchNotOver() {
    return (this.score.computer < Score.WINNING_SCORE &&
            this.score.human < Score.WINNING_SCORE);
  }

  roundOver() {
    return this.board.isFull() || this.someoneWonRound();
  }

  someoneWonRound() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
}

let game = new TTTGame();
game.play();
