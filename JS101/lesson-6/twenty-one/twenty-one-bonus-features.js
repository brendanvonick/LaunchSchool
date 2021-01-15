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
const MAX_VALUE = 21;
const MIN_DEALER_STAYS = MAX_VALUE - 4;
const WINNING_SCORE = 5;
const SUITS = ['H', 'D', 'C', 'S'];
const FACE_CARDS = ['J', 'Q', 'K', 'A'];
const DECK = deckCreation();


function deckCreation() {
  let deck = [];
  SUITS.forEach(suit => {
    for (let value = 2; value <= 10; value += 1) {
      let subArr = [];
      subArr[0] = suit;
      subArr[1] = String(value);
      deck.push(subArr);
    }

    FACE_CARDS.forEach(face => {
      let subArr = [];
      subArr[0] = suit;
      subArr[1] = face;
      deck.push(subArr);
    });
  });

  return deck;
}

function prompt(statement) {
  console.log(`==> ${statement}`);
}

function shuffle(newDeck) {
  for (let index = newDeck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [newDeck[index], newDeck[otherIndex]] =
    [newDeck[otherIndex], newDeck[index]]; // swap elements
  }
}

function dealCards(newDeck, cards, dealersCards) {
  cards.push(newDeck.shift(), newDeck.shift());
  dealersCards.push(newDeck.shift(), newDeck.shift());
}

function hit(cards, newDeck) {
  cards.push(newDeck.shift());
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
    if (sum > MAX_VALUE) sum -= 10;
  });

  return sum;
}

function busted(total) {
  return (total > MAX_VALUE);
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

function swapValSuits(cardValues, cardValSuits) {
  cardValSuits.forEach((_, index) => {
    if (cardValSuits[index] === 'S') {
      cardValSuits[index] = `${cardValues[index]} (Spades)`;
    } else if (cardValSuits[index] === 'C') {
      cardValSuits[index] = `${cardValues[index]} (Clubs)`;
    } else if (cardValSuits[index] === 'H') {
      cardValSuits[index] = `${cardValues[index]} (Hearts)`;
    } else if (cardValSuits[index] === 'D') {
      cardValSuits[index] = `${cardValues[index]} (Diamonds)`;
    }
  });
}

function displayCards(cards, delimiter = ', a ', joinWords = ', and a ') {
  let cardValues = [];
  let cardValSuits = [];

  for (let object in cards) {
    cardValues.push(cards[object][1]);
    cardValSuits.push(cards[object][0]);
  }

  swapValues(cardValues);
  swapValSuits(cardValues, cardValSuits);

  switch (cardValSuits.length) {
    case 2:
      return `${cardValSuits[0]} and a ${cardValSuits[1]}.`;
    case 3:
      return `${cardValSuits[0]}${delimiter}` +
             `${cardValSuits[1]}${joinWords}${cardValSuits[2]}.`;
    default:
      return cardValSuits.slice(0, cardValSuits.length - 1).join(delimiter) +
              `${joinWords}${cardValSuits[cardValSuits.length - 1]}.`;
  }
}

function displayDealersCards(dealersCards) {
  let cardValues = [];
  let cardValSuits = [];

  for (let object in dealersCards) {
    cardValues.push(dealersCards[object][1]);
    cardValSuits.push(dealersCards[object][0]);
  }

  swapValues(cardValues);
  swapValSuits(cardValues, cardValSuits);

  return `${cardValSuits[0]} and an unknown card.`;
}

function dealerStays(dealerTotal) {
  if  (!busted(dealerTotal) &&
       dealerTotal >= MIN_DEALER_STAYS &&
       dealerTotal !== MAX_VALUE) {
    prompt('Dealer stays...');
  }
}

function results(dealerTotal, playerTotal) {
  if (busted(playerTotal)) {
    prompt(`You went over ${MAX_VALUE} and busted.`);
    prompt('Dealer wins!');
  } else if (busted(dealerTotal)) {
    prompt(`Dealer went over ${MAX_VALUE} and busted.`);
    prompt('You Win! Congratulations!');
  } else if (!busted(dealerTotal) && dealerTotal > playerTotal) {
    prompt('Dealer wins!');
  } else if (dealerTotal === playerTotal) {
    prompt("It's a tie!");
  } else {
    prompt('You win! Congratulations!');
  }
}

function dealerHits(dealersCards, newDeck, dealerTotal) {
  dealerTotal = total(dealersCards);
  while (dealerTotal < MIN_DEALER_STAYS) {
    prompt('Dealer hits...');
    hit(dealersCards, newDeck);
    prompt(`Dealer has a ${displayCards(dealersCards)}`);
    dealerTotal = total(dealersCards);
    prompt(`Dealer's total is ${total(dealersCards)}.`);

    dealerStays(dealerTotal);
  }
}

function initialDisplay(cards, dealersCards, playerTotal) {
  prompt(`Dealer has a ${displayDealersCards(dealersCards)}`);
  prompt(`You have a ${displayCards(cards)}`);
  playerTotal = total(cards);
  prompt(`Your total is ${playerTotal}.`);
}

function hitOrStay(cards, newDeck, playerTotal) {
  while (true) {
    let answer = hitOrStayPrompt();

    if (['h', 'hit'].includes(answer)) {
      hit(cards, newDeck);
      prompt(`You have a ${displayCards(cards)}`);
      playerTotal = total(cards);
      prompt(`Your total is ${playerTotal}.`);
    }

    if (busted(playerTotal)) {
      break;
    } else if (['s', 'stay'].includes(answer)) {
      prompt('You chose to stay!\n...');
      break;
    }
  }
}

function dealersTurn(dealersCards, newDeck, dealerTotal) {
  while (true) {
    dealerTotal = total(dealersCards);
    prompt(`Dealer has a ${displayCards(dealersCards)}`);
    prompt(`Dealer's total is ${dealerTotal}.`);

    dealerHits(dealersCards, newDeck, dealerTotal);
    dealerTotal = total(dealersCards);
    if (dealerTotal >= MIN_DEALER_STAYS || busted(dealerTotal)) break;
  }
}

function invalidOption(validOptions, answer) {
  while (!validOptions.includes(answer)) {
    prompt(`That is not a valid option, would you like to play again? (y/n)`);
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function hitOrStayPrompt() {
  prompt('hit (h) or stay (s)?');
  let validOptions = ['h', 's', 'hit', 'stay'];
  let answer = readline.question().toLowerCase();
  while (!validOptions.includes(answer)) {
    prompt(`That is not a valid option, hit or stay? (h/s)`);
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function invalidOptionRound(validOptions, answer) {
  while (!validOptions.includes(answer)) {
    prompt(`That is not a valid option, ready for the next round? (y/n)`);
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function playAgain() {
  prompt('Would you like to play again (y/n)?');
  let validOptions = ['y', 'n'];
  let answer = readline.question().toLowerCase();
  answer = invalidOption(validOptions, answer);
  return answer === 'y';
}


function nextRound() {
  prompt('');
  prompt('Are you ready for the next round (y/n)?');
  let validOptions = ['y', 'n'];
  let answer = readline.question().toLowerCase();
  answer = invalidOptionRound(validOptions, answer);
  return answer === 'y';
}

function initializeDeck(newDeck) {
  DECK.forEach(element => {
    newDeck.push(element);
  });
}

function intro() {
  console.clear();
  console.log('*** Welcome to Twenty-One! ***');
  console.log('You are playing against the dealer (computer), first to 5 wins!');
  console.log('');
}

function whoWonRound(dealerTotal, playerTotal) {
  if (busted(dealerTotal)) {
    return 'player';
  } else if (busted(playerTotal)) {
    return 'dealer';
  } else if (!busted(dealerTotal) && dealerTotal > playerTotal) {
    return 'dealer';
  } else if (!busted(dealerTotal) && dealerTotal < playerTotal) {
    return 'player';
  } else {
    return undefined;
  }
}

intro();

// Main Game Loop

while (true) {
  let playerScore = 0;
  let dealerScore = 0;


  while (true) {

    let newDeck = [];
    let cards = [];
    let dealersCards = [];
    let playerTotal = 0;
    let dealerTotal = 0;

    initializeDeck(newDeck);

    shuffle(newDeck);

    dealCards(newDeck, cards, dealersCards);

    prompt(`Player: ${playerScore} Dealer: ${dealerScore}`);
    prompt(`<=================>`);
    initialDisplay(cards, dealersCards, playerTotal);

    hitOrStay(cards, newDeck, playerTotal);

    playerTotal = total(cards);

    if (busted(playerTotal)) {
      results(dealerTotal, playerTotal);
    } else {
      dealersTurn(dealersCards, newDeck, dealerTotal);
      dealerTotal = total(dealersCards);
      results(dealerTotal, playerTotal);
    }

    if (whoWonRound(dealerTotal, playerTotal) === 'player') {
      playerScore += 1;
    } else if (whoWonRound(dealerTotal, playerTotal) === 'dealer') {
      dealerScore += 1;
    }


    if (playerScore < WINNING_SCORE && dealerScore < WINNING_SCORE) {
      let nextRoundValue = nextRound();
      while (nextRoundValue === false) {
        nextRoundValue = nextRound();
      }

      console.clear();
    }


    if (playerScore === WINNING_SCORE || dealerScore === WINNING_SCORE) break;

  }
  console.log('');
  prompt(`Final Score - Player: ${playerScore} Dealer: ${dealerScore}`);

  let playAgainValue = playAgain();
  if (!playAgainValue) {
    console.clear();
    break;
  } else {
    intro();
  }
}
