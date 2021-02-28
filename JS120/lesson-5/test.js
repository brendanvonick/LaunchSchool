// obj is the context for `joinOr`; replace it with the correct context.

let obj = {
  joinOr(array, del = ', ', word = 'or') {
    if (array.length === 1) {
      console.log(array[0]);
    } else if (array.length === 2) {
      console.log(array.join(` ${word} `));
    } else {
      console.log(`${array.slice(0, array.length - 1).join(del)}${del}${word} ${array[array.length - 1]}`);
    }
  }
}
obj.joinOr([1, 2])                   // => "1 or 2"
obj.joinOr([1, 2, 3])                // => "1, 2, or 3"
obj.joinOr([1, 2, 3], '; ')          // => "1; 2; or 3"
obj.joinOr([1, 2, 3], ', ', 'and')   // => "1, 2, and 3"





// const readline = require('readline-sync');
//
// class Square {
//   static UNUSED_SQUARE = ' ';
//   static HUMAN_MARKER = 'X';
//   static COMPUTER_MARKER = 'O';
//
//   constructor(marker = Square.UNUSED_SQUARE) {
//     this.marker = marker;
//   }
//
//   toString() {
//     return this.marker;
//   }
//
//   setMarker(marker) {
//     this.marker = marker;
//   }
//
//   isUnused() {
//     return this.marker === Square.UNUSED_SQUARE;
//   }
//
//   getMarker() {
//     return this.marker;
//   }
// }
//
// class Board {
//   constructor() {
//     this.squares = {};
//     for (let idx = 1; idx <= 9; idx += 1) {
//       this.squares[idx] = new Square();
//     }
//   }
//
//   unusedSquares() {
//     let keys = Object.keys(this.squares);
//     return keys.filter(key => this.squares[key].isUnused());
//   }
// }
//
// class TTTGame {
//   constructor() {
//     this.board = new Board();
//   }
//
//   play() {
//     this.humanMoves();
//   }
//
//   humanMoves() {
//     let choice;
//
//     while (true) {
//       let validChoices = this.board.unusedSquares();
//       const prompt =  `Choose a square (${validChoices.join(', ')}): `;
//       choice = readline.question(prompt);
//
//       if (validChoices.includes(choice)) break;
//
//       console.log("Sorry, that's not a valid choice.");
//       console.log('');
//
//     }
//   }
// }
//
// let game = new TTTGame();
// game.play();
