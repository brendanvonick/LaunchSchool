//  Write a program that can generate the lyrics of the 99 Bottles of Beer song.
//  See the test suite for the entire song.


'use strict';

class BeerSong {
  static VERSES = ["No more bottles of beer on the wall, no more bottles of beer.\n" +
                   "Go to the store and buy some more, 99 bottles of beer on the wall.\n",
                   "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                   "Take it down and pass it around, no more bottles of beer on the wall.\n",
                   "2 bottles of beer on the wall, 2 bottles of beer.\n" +
                   "Take one down and pass it around, 1 bottle of beer on the wall.\n"
                    ];

  static ADD_VERSES() {
    for (let beers = 3; beers <= 99; beers += 1) {
      BeerSong.VERSES.push(`${beers} bottles of beer on the wall, ${beers} bottles of beer.\n` +
                           `Take one down and pass it around, ${beers - 1} bottles of beer on the wall.\n`)
    };
  }

  constructor() {
    BeerSong.ADD_VERSES();
  }

  verse(verse) {
    return BeerSong.VERSES[verse[0]];
  }

  verses(verses) {
    let str = '';

    for (let idx = verses[0]; idx > verses[1]; idx -= 1) {
      str += `${BeerSong.VERSES[idx]}\n`;
    }

    str += BeerSong.VERSES[verses[1]];

    return str;
  }

  static verse(...args) {
    let beerSong = new BeerSong();
    return beerSong.verse(args);
  }

  static verses() {
    let beerSong = new BeerSong();
    return beerSong.verses(Array.from(arguments));
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }

}

module.exports = BeerSong;
