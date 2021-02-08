// RPS is a 2-player game where each player chooses one of three possible moved:
// rock, paper, or scissors. The winner is chosen by comparing their moves with
// the following rules:
//   - Rock crushes scissors, i.e. rock wins against scissors.
//   - Scissors cuts paper, i.e., scissors beats paper.
//   - Paper wraps wrock, i.e., paper beats rock.
//   - If the players chose the same move, the game is a tie.

//  Nouns: player, move, rule
//  Verbs: choose, compare

//  Player
//    - choose
//  Move
//  Rule

//  Bonus features:
//  1. Keep score/first to 5 wins
//  2. Add in Lizard and Spock
//  3. Keep track of move history (nested array structure)
//  4. Add computer choice based on history (object based on move history,
//     using that object to alter choices for computer to select, reducing the
//     probability of a move if that move's history has a loss percentage
//     greater than 60%)

const readline = require('readline-sync');

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['scissors', 'rock'],
};


function historyObjAdd(moveHistory, compHistObj) {
  moveHistory.forEach(moveData => {
    switch (moveData.move) {
      case 'rock':
        compHistObj.rockTotal += 1;
        if (moveData.roundResult === 'Loss') compHistObj.rockLoss += 1;
        break;
      case 'paper':
        compHistObj.paperTotal += 1;
        if (moveData.roundResult === 'Loss') compHistObj.paperLoss += 1;
        break;
      case 'scissors':
        compHistObj.scissorsTotal += 1;
        if (moveData.roundResult === 'Loss') compHistObj.scissorsLoss += 1;
        break;
      case 'lizard':
        compHistObj.lizardTotal += 1;
        if (moveData.roundResult === 'Loss') compHistObj.lizardLoss += 1;
        break;
      case 'spock':
        compHistObj.spockTotal += 1;
        if (moveData.roundResult === 'Loss') compHistObj.spockLoss += 1;
        break;
    }
  });
}

function editChoices(compHistObj, choices) {
  if (compHistObj.rockLoss / compHistObj.rockTotal > .6) {
    choices.splice(choices.indexOf('rock'), 1);
  }

  if (compHistObj.paperLoss / compHistObj.paperTotal > .6) {
    choices.splice(choices.indexOf('paper'), 1);
  }

  if (compHistObj.scissorsLoss / compHistObj.scissorsTotal > .6) {
    choices.splice(choices.indexOf('scissors'), 1);
  }

  if (compHistObj.lizardLoss / compHistObj.lizardTotal > .6) {
    choices.splice(choices.indexOf('lizard'), 1);
  }

  if (compHistObj.spockLoss / compHistObj.spockTotal > .6) {
    choices.splice(choices.indexOf('spock'), 1);
  }
}


function createChoices(moveHistory) {
  const compHistObj = {
    rockLoss : 0, rockTotal : 0, paperLoss : 0, paperTotal : 0,
    scissorsLoss : 0, scissorsTotal : 0, lizardLoss : 0, lizardTotal : 0,
    spockLoss : 0, spockTotal : 0
  };

  let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock',
    'rock', 'paper', 'scissors', 'lizard', 'spock'];

  historyObjAdd(moveHistory, compHistObj);
  editChoices(compHistObj, choices);

  return choices;
}


function createPlayer() {
  return {
    move: null,
    score: 0,
    moveHistory: [],
  };
}


function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let choices = createChoices(this.moveHistory);

      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}


function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard or spock:');
        choice = readline.question().toLowerCase();
        if (['rock', 'paper', 'scissors', 'lizard', 'spock']
          .includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}


function humanWinsRound(humanMove, computerMove) {
  return WINNING_COMBOS[humanMove].includes(computerMove);
}


function computerWinsRound(humanMove, computerMove) {
  return WINNING_COMBOS[computerMove].includes(humanMove);
}


const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  winningScore: 5,

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper Scissors!');
    console.log('You are playing against the computer.');
    console.log(`First to ${this.winningScore} wins is the overall winner!`);
    this.logLines();
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayChoices() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
  },

  processWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if (humanWinsRound(humanMove, computerMove)) {
      console.log('You win!');
      this.human.score += 1;
      this.human.moveHistory.push({move: humanMove, roundResult: 'Win'});
      this.computer.moveHistory.push({move: computerMove, roundResult: 'Loss'});
    } else if (computerWinsRound(humanMove, computerMove)) {
      console.log('Computer wins!');
      this.computer.score += 1;
      this.human.moveHistory.push({move: humanMove, roundResult: 'Loss'});
      this.computer.moveHistory.push({move: computerMove, roundResult: 'Win'});
    } else {
      console.log("It's a tie");
      this.human.moveHistory.push({move: humanMove, roundResult: 'Tie'});
      this.computer.moveHistory.push({move: computerMove, roundResult: 'Tie'});
    }
  },

  displayScore() {
    console.log(`The score is... you: ${this.human.score} ` +
                `computer: ${this.computer.score}`);
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  logLines() {
    console.log('-'.repeat(38));
  },

  resetGame() {
    this.human.score = 0;
    this.computer.score = 0;
    this.human.moveHistory = [];
    this.computer.moveHistory = [];
    console.clear();
  },

  play() {
    while (true) {
      this.displayWelcomeMessage();

      while (this.human.score < this.winningScore &&
             this.computer.score < this.winningScore) {
        this.human.choose();
        this.computer.choose();
        this.displayChoices();
        this.processWinner();
        this.displayScore();
        this.logLines();
      }

      if (this.playAgain()) {
        this.resetGame();
      } else {
        break;
      }
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
