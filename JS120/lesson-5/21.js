// -Game (n)
//    -start (v)
// -Deck (n)
//    -deal (v) (should this be here, or in Dealer?)
// -Card (n)
// -Participant (n)
// -Player (n)
//    -hit (v)
//    -stay (v)
//    -bust (state)
//    -Score (n, state)
// -Dealer (n)
//    -hit (v)
//    -stay (v)
//    -deal (v) (should this be here, or in Deck?)
//    -bust (state)
//    -Score (n, state)

const readline = require('readline-sync');
const shuffle = require('shuffle-array');

class Deck {
  static SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  static FACE_CARDS = ['Jack', 'Queen', 'King', 'Ace'];
  constructor() {
    this.deck = [];
    Deck.SUITS.forEach(suit => {
      for (let cardNum = 2; cardNum <= 10; cardNum += 1) {
        let card = {};
        card['suit'] = suit;
        card['value'] = cardNum;
        this.deck.push(card);
      }

      Deck.FACE_CARDS.forEach(faceCard => {
        let card = {};
        card['suit'] = suit;
        card['value'] = faceCard;
        this.deck.push(card);
      });
    });
    shuffle(this.deck);
  }

  deal() {
    return this.deck.splice(this.deck.length - 2, 2);
  }

  hit() {
    return this.deck.pop(this.deck.length - 1, 1);
  }
}

class Participant {
  static STARTING_MONEY = 5;

  constructor() {
    this.hand = [];
    this.money = Participant.STARTING_MONEY;
  }

  sort(hand) {
    let sortedHand = hand.filter(card => {
      return card.value !== 'Ace';
    });

    hand.forEach(card => {
      if (card.value === 'Ace') {
        sortedHand.push(card);
      }
    });

    return sortedHand;
  }

  total() {
    let total = 0;

    let sortedHand = this.sort(this.hand);

    sortedHand.forEach(card => {
      if (!Deck.FACE_CARDS.includes(card.value)) {
        total += card.value;
      } else if (['Jack', 'Queen', 'King'].includes(card.value)) {
        total += 10;
      } else if (card.value === 'Ace') {
        let totalTest = total;
        if (totalTest + 11 <= 21) {
          total += 11;
        } else {
          total += 1;
        }
      }
    });

    return total;
  }

  isBusted() {
    return this.total() > 21;
  }
}

class Player extends Participant {
  constructor() {
    super();
  }

  displayTotal() {
    console.log(`Your total is: ${this.total()}`);
  }

  stay() {
    console.log('You chose to stay...');
  }
}

class Dealer extends Participant {

  constructor() {
    super();
  }

  displayTotal() {
    console.log(`Dealer's total is: ${this.total()}`);
  }

  stay() {
    console.log('The dealer chooses to stay...');
  }
}

class TwentyOneGame {
  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
  }

  start() {
    this.displayWelcomeMessage();
    while (true) {
      this.dealCards();
      this.showInitialCards();
      this.playerTurn();
      this.dealerTurn();
      this.moneyExchange();
      this.displayResult();
      if (this.player.money === 10 || this.dealer.money === 10) {
        break;
      }
      this.promptNextRound();
      this.reset();
    }

    this.displayFinalResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    this.player.hand = this.player.hand.concat(this.deck.deal());
    this.dealer.hand = this.dealer.hand.concat(this.deck.deal());
  }

  showInitialCards() {
    console.log(`The dealer has a ${this.dealer.hand[0].value} ` +
                `(${this.dealer.hand[0].suit}) and an unknown card`);
    console.log(`You have a ${this.showCards(this.player.hand)}`);
    this.displayTotal(this.player.hand);
  }

  showCards(hand) {
    let displayArr = [];
    let displayStr = '';
    hand.slice(0, hand.length - 1).forEach(card => {
      displayArr.push(`${card['value']} (${card['suit']})`);
    });
    displayStr = displayArr.join(', a ');
    displayStr = displayStr.concat(` and a ${hand[hand.length - 1]['value']} ` +
                                   `(${hand[hand.length - 1]['suit']}).`);
    return displayStr;
  }

  displayTotal() {
    console.log(`Your total is: ${this.player.total()}`);
  }

  playerTurn() {
    let choice;
    do {
      choice = readline.question('... Would you like to hit' +
                                 'or stay (hit/stay)? ');
      let validChoices = ['hit', 'stay'];
      while (!validChoices.includes(choice.toLowerCase())) {
        choice = readline.question('Invalid option, hit or stay (hit/stay)');
      }
      if (choice === 'hit') {
        this.hit(this.player.hand);
        console.log(`You have a ${this.showCards(this.player.hand)}`);
        this.displayTotal();
      } else {
        this.player.stay();
      }
    } while (choice !== 'stay' && !this.player.isBusted());
  }

  dealerTurn() {
    if (!this.player.isBusted()) {
      console.log('');
      console.log("Dealer's turn");
      console.log(`The dealer has a ${this.showCards(this.dealer.hand)}`);
      console.log(`The dealer's total is ${this.dealer.total()}`);

      while (this.dealer.total() < 17) {
        console.log('The dealer hits.');
        this.hit(this.dealer.hand);
        console.log(`The dealer has a ${this.showCards(this.dealer.hand)}`);
        console.log(`The dealer's total is ${this.dealer.total()}`);
      }
    }

  }

  hit(hand) {
    hand.push(this.deck.hit());
  }

  displayWelcomeMessage() {
    console.clear();
    console.log(`${' '.repeat(10)}*** Welcome to Twenty-One! ***`);
    console.log(`<${'='.repeat(48)}>`);
    console.log('You are playing against the dealer (computer).');
    console.log(`You start with $${Participant.STARTING_MONEY}.`);
    console.log('');
    console.log('each round costs $1, you win if you reach $10, ');
    console.log('... or lose when you run out of money.');
    console.log('');
  }

  displayGoodbyeMessage() {
    console.log('');
    console.log('Thank you for playing Twenty-One! Goodbye!');
  }

  displayResult() {
    console.log('');
    if (this.player.isBusted()) {
      console.log('You busted, the dealer wins that round.');
    } else if (this.dealer.isBusted()) {
      console.log('The dealer busted, you win that round!');
    } else if (this.determineWinner() === this.player) {
      console.log('You won that round, congratulations!');
    } else if (this.determineWinner() === this.dealer) {
      console.log('You lost that round, better luck next time.');
    } else {
      console.log('That round ended in a tie.');
    }

    console.log(`Your bank total is currently $${this.player.money}.00.`);
  }

  displayFinalResult() {
    console.log('');
    console.log('');
    if (this.player.money === 10) {
      console.log('Your pockets are full with $10.00! You won the match!');
      console.log('Congratulations');
    } else {
      console.log('You are out of money now.. you lost the match.');
      console.log('Better luck next time!');
    }
  }

  determineWinner() {
    if (this.player.isBusted()) {
      return this.dealer;
    } else if (this.dealer.isBusted()) {
      return this.player;
    }

    if (this.player.total() > this.dealer.total()) {
      return this.player;
    } else if (this.dealer.total() > this.player.total()) {
      return this.dealer;
    } else {
      return 'tie';
    }
  }

  moneyExchange() {
    if (this.determineWinner() === this.player) {
      this.playerWonMoney();
    } else if (this.determineWinner() === this.dealer) {
      this.dealerWonMoney();
    }
  }

  playerWonMoney() {
    this.dealer.money -= 1;
    this.player.money += 1;
  }

  dealerWonMoney() {
    this.dealer.money += 1;
    this.player.money -= 1;
  }

  promptNextRound() {
    let choice = readline.question('Are you ready for the next round (y)? ');
    while (choice.toLowerCase() !== 'y') {
      choice = readline.question('Invalid option... are you ready for the ' +
                                 'next round (y)? ');
    }
  }

  reset() {
    console.clear();
    console.log('');
    console.log(`<${'='.repeat(48)}>`);
    console.log(`Your bank total is currently $${this.player.money}.00.`);
    console.log('');
    this.deck = new Deck();
    this.player.hand = [];
    this.dealer.hand = [];
  }
}

let game = new TwentyOneGame();
game.start();
