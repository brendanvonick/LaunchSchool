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

function historyObjAdd(moveHistory, compHistObj) {
  moveHistory.forEach(subArr => {
    switch (subArr[0]) {
      case 'rock':
        compHistObj.rockTotal += 1;
        if (subArr[1] === 'Loss') compHistObj.rockLoss += 1;
        break;
      case 'paper':
        compHistObj.paperTotal += 1;
        if (subArr[1] === 'Loss') compHistObj.paperLoss += 1;
        break;
      case 'scissors':
        compHistObj.scissorsTotal += 1;
        if (subArr[1] === 'Loss') compHistObj.scissorsLoss += 1;
        break;
      case 'lizard':
        compHistObj.lizardTotal += 1;
        if (subArr[1] === 'Loss') compHistObj.lizardLoss += 1;
        break;
      case 'spock':
        compHistObj.spockTotal += 1;
        if (subArr[1] === 'Loss') compHistObj.spockLoss += 1;
        break;
    }
  });
}

function editChoices(compHistObj, choices) {
  if (compHistObj.rockLoss / compHistObj.rockTotal > .6) {
    let rockIdx = choices.indexOf('rock');
    choices.splice(rockIdx, 1);
  } else if (compHistObj.paperLoss / compHistObj.paperTotal > .6) {
    let paperIdx = choices.indexOf('paper');
    choices.splice(paperIdx, 1);
  } else if (compHistObj.scissorsLoss / compHistObj.scissorsTotal > .6) {
    let scissorsIdx = choices.indexOf('scissors');
    choices.splice(scissorsIdx, 1);
  } else if (compHistObj.lizardLoss / compHistObj.lizardTotal > .6) {
    let lizardIdx = choices.indexOf('lizard');
    choices.splice(lizardIdx, 1);
  } else if (compHistObj.spockLoss / compHistObj.spockTotal > .6) {
    let spockIdx = choices.indexOf('spock');
    choices.splice(spockIdx, 1);
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
    score: 0,

    moveHistory: [],
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
    score: 0,

    moveHistory: [],
  };

  return Object.assign(playerObject, humanObject);
}


function humanWins(humanMove, computerMove) {
  return (humanMove === 'rock' && computerMove === 'scissors') ||
         (humanMove === 'rock' && computerMove === 'lizard') ||
         (humanMove === 'paper' && computerMove === 'rock') ||
         (humanMove === 'paper' && computerMove === 'spock') ||
         (humanMove === 'scissors' && computerMove === 'paper') ||
         (humanMove === 'scissors' && computerMove === 'lizard') ||
         (humanMove === 'lizard' && computerMove === 'paper') ||
         (humanMove === 'lizard' && computerMove === 'spock') ||
         (humanMove === 'spock' && computerMove === 'scissors') ||
         (humanMove === 'spock' && computerMove === 'rock');
}

function computerWins(humanMove, computerMove) {
  return (computerMove === 'rock' && humanMove === 'scissors') ||
         (computerMove === 'rock' && humanMove === 'lizard') ||
         (computerMove === 'paper' && humanMove === 'rock') ||
         (computerMove === 'paper' && humanMove === 'spock') ||
         (computerMove === 'scissors' && humanMove === 'paper') ||
         (computerMove === 'scissors' && humanMove === 'lizard') ||
         (computerMove === 'lizard' && humanMove === 'paper') ||
         (computerMove === 'lizard' && humanMove === 'spock') ||
         (computerMove === 'spock' && humanMove === 'scissors') ||
         (computerMove === 'spock' && humanMove === 'rock');
}

function displayChoices(humanMove, computerMove) {
  console.log(`You chose: ${humanMove}`);
  console.log(`The computer chose: ${computerMove}`);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    displayChoices(humanMove, computerMove);

    if (humanWins(humanMove, computerMove)) {
      console.log('You win!');
      this.human.score += 1;
      this.human.moveHistory.push([humanMove, 'Win']);
      this.computer.moveHistory.push([computerMove, 'Loss']);
    } else if (computerWins(humanMove, computerMove)) {
      console.log('Computer wins!');
      this.computer.score += 1;
      this.human.moveHistory.push([humanMove, 'Loss']);
      this.computer.moveHistory.push([computerMove, 'Win']);
    } else {
      console.log("It's a tie");
      this.human.moveHistory.push([humanMove, 'Tie']);
      this.computer.moveHistory.push([computerMove, 'Tie']);
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
      console.log('-'.repeat(32));
      while (this.human.score < 5 && this.computer.score < 5) {
        this.human.choose();
        this.computer.choose();
        this.displayWinner();
        this.displayScore();
        console.log('-'.repeat(32));
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
