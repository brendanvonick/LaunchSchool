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

// ???
//    - compare

const readline = require('readline-sync');

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
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
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createPlayer() {
  return {
    move: null,
  };
}

// function createMove() {
//   return {
//     // possible state: type of move (paper, rock, scissors)
//   };
//
// }
//
//
// function createRule() {
//   return {
//     // possible state? not clear whether Rules need state
//   };
// }


//  Since we don't yet know where to put 'compare', let's define it as an
//  ordinary function.
// let compare = function(move1, move2) {
//   // not yet implemented
// }

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

    console.log(`You chose: ${this.human.move}`);
    console.log( `The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
