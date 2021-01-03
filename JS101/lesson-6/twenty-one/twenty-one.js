/*
Rules of Twenty-One

Deck: Start with a standard 52-card deck consisting of the 4 suits (Hearts,
Diamonds, Clubs, and Spades), and 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack,
Queen, King, Ace).

Goal: The goal of Twenty-One is to try to get as close to 21 as possible without
going over. If you go over 21, it's a bust, and you lose.

Setup: The game consists of a dealer and a player. Both participants are
initially dealt two cards. The player can see their 2 cards, but can only see
one of the dealer's cards.

Card values: All of the card values are pretty straightforward, except for the
Ace. The cards with numbers 2 through 10 are worth their face value. The Jack,
Queen, and King are each worth 10. The Ace can be worth 1 or 11 depending on
circumstances. Its value is determined each time a new card is drawn from the
deck. For example, if the hand contains a 2, an Ace, and a 5, then the total
value of the hand is 18. In this case, the Ace is worth 11 because the sum of
the hand (2 + 11 + 5) doesn't exceed 21. Now, say another card is drawn, and it
happens to be an Ace. Your program must determine the value of both Aces. If
the sum of the hand (2 + 11 + 5 + 11) exceeds 21, then one of the Aces must be
worth 1, resulting in the hand's total value being 19. What happens if another
card is drawn and it also happens to be an Ace? It can get tricky if there are
multiple Aces in a hand, so your program must account for that.

Player turn: The player always goes first, and can decide to either hit or stay.
A hit means the player wants to be dealt another card. Remember, if his total
exceeds 21, he will bust and lose the game. The decision to hit or stay depends
on the player's cards and what the player thinks the dealer has. For example,
if the dealer is showing a "10" (the other card is hidden), and the player has
a "2" and a "4", then the obvious choice is for the player to hit. The player
can continue to hit as many times as they want. The turn is over when the player
either busts or stays. If the player busts, the game is over, and the dealer
won.

Dealer turn: When the player stays, it's the dealer's turn. The dealer must
follow a strict rule for determining whether to hit or stay: hit until the total
is at least 17. If the dealer busts, then the player wins.

Comparing cards: When both the player and the dealer stay, it's time to compare
the total value of the cards and see who has the highest value.

*/

/*
Psuedocode:

Game:
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.


Player Turn:
- Ask player to hit or stay.
- If stay, stop asking.
- Otherwise, go to #1.


*/

const readline = require('readline-sync');

let deck = [['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], // Hearts
  ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'],          // Hearts
  ['H', 'Q'], ['H', 'K'], ['H', 'A'],                                   // Hearts
  ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'],           // Diamonds
  ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'],          // Diamonds
  ['D', 'Q'], ['D', 'K'], ['D', 'A'],                                   // Diamonds
  ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'],           // Clubs
  ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'],          // Clubs
  ['C', 'Q'], ['C', 'K'], ['C', 'A'],                                   // Clubs
  ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'],           // Spades
  ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'],          // Spades
  ['S', 'Q'], ['S', 'K'], ['S', 'A']];                                  // Spades

function prompt(statement) {
  console.log(`==> ${statement}`);
}


function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

function dealCards(deck, cards, dealersCards) {
  cards.push(deck.shift());
  dealersCards.push(deck.shift());
  cards.push(deck.shift());
  dealersCards.push(deck.shift());
}

function hit(cards) {
  cards.push(deck.shift());
}

// Method to calculate total

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(cards) {
  return (total(cards) > 21);
}

function swapValues(cardValues) {
  cardValues.forEach((_, index) => {
    if (cardValues[index] === 'J') {
      cardValues[index] = 'Jack';
    } else if (cardValues[index] === 'Q') {
      cardValues[index] = 'Queen';
    } else if (cardValues[index] === 'K') {
      cardValues[index] = 'King';
    } else if (cardValues[index] === 'A') {
      cardValues[index] = 'Ace';
    }
  });
}

function displayCards(cards, delimiter = ', a ', joinWords = ', and a ') {
  let cardValues = [];

  for (let object in cards) {
    cardValues.push(cards[object][1]);
  }

  swapValues(cardValues);

  switch (cardValues.length) {
    case 2:
      return `${cardValues[0]} and a ${cardValues[1]}.`;
    case 3:
      return `${cardValues[0]}${delimiter}${cardValues[1]}${joinWords}` +
             `${cardValues[2]}.`;
    default:
      return cardValues.slice(0, cardValues.length - 1).join(delimiter) +
              `${joinWords}${cardValues[cardValues.length - 1]}.`;
  }
}

function displayDealersCards(dealersCards) {
  let cardValues = [];

  for (let object in dealersCards) {
    cardValues.push(dealersCards[object][1]);
  }

  swapValues(cardValues);

  return `${cardValues[0]} and an unknown card.`;
}

function dealerStays(dealersCards) {
  if  (!busted(dealersCards) &&
       total(dealersCards) >= 17 &&
       total(dealersCards) !== 21) {
    prompt('Dealer stays...');
  }
}

function results(cards, dealersCards) {
  if (busted(dealersCards)) {
    prompt('Dealer went over 21 and busted.');
    prompt('You Win! Congratulations!');
  } else if (!busted(dealersCards) && total(dealersCards) > total(cards)) {
    prompt('Dealer wins!');
  } else if (total(dealersCards) === total(cards)) {
    prompt("It's a tie!");
  } else {
    prompt('You win! Congratulations!');
  }
}

function logBusted(cards) {
  if (busted(cards)) {
    prompt('You went over 21 and busted.');
    prompt('Dealer wins!');
  } else {
    prompt('You chose to stay!');  // if player didn't bust, must have stayed to get here
    prompt('...');
  }
}

function dealerHits(dealersCards) {
  while (total(dealersCards) < 17) {
    prompt('Dealer hits...');
    hit(dealersCards);
    prompt(`Dealer has a ${displayCards(dealersCards)}`);
    prompt(`Dealer's total is ${total(dealersCards)}.`);

    dealerStays(dealersCards);
  }
}

function initialDisplay(cards, dealersCards) {
  prompt(`Dealer has a ${displayDealersCards(dealersCards)}`);
  prompt(`You have a ${displayCards(cards)}`);
  prompt(`Your total is ${total(cards)}.`);
}

function hitOrStay(cards) {
  while (true) {
    prompt('hit or stay?');
    let validOptions = ['hit', 'stay'];
    let answer = readline.question().toLowerCase();
    while (!validOptions.includes(answer)) {
      prompt(`That is not a valid option, hit or stay? (hit/stay)`);
      answer = readline.question().toLowerCase();
    }

    if (answer === 'hit') {
      hit(cards);
      prompt(`You have a ${displayCards(cards)}`);
      prompt(`Your total is ${total(cards)}.`);
    }

    if (answer === 'stay' || busted(cards)) break;
  }
}

function dealersTurn(dealersCards) {
  while (true) {
    prompt(`Dealer has a ${displayCards(dealersCards)}`);
    prompt(`Dealer's total is ${total(dealersCards)}.`);

    dealerHits(dealersCards);

    if (total(dealersCards) >= 17 || busted(dealersCards)) break;
  }
}

function invalidOption(validOptions, answer) {
  while (!validOptions.includes(answer)) {
    prompt(`That is not a valid option, would you like to play again? (y/n)`);
    answer = readline.question().toLowerCase();
  }
  return answer;
}


console.log('*** Welcome to Twenty-One! ***');

// Main Game Loop
while (true) {

  shuffle(deck);

  let cards = [];
  let dealersCards = [];

  dealCards(deck, cards, dealersCards);

  initialDisplay(cards, dealersCards);

  hitOrStay(cards);

  logBusted(cards);

  if (!busted(cards)) {
    dealersTurn(dealersCards);

    results(cards, dealersCards);
  }

  prompt('Would you like to play again (y/n)?');
  let validOptions = ['y', 'n'];
  let answer = readline.question().toLowerCase();
  answer = invalidOption(validOptions, answer);
  if (answer === 'y') {
    console.clear();
    continue;
  } else {
    break;
  }
}
