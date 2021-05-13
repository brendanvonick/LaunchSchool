// PEDAC
// Understanding the Problem:
// - The Hamming distance is the differences between 2 homologous DNA strands
//   taken from different gnomes with a common ancestor.
// - Given 2 DNA strands, the differences in characters represents the
//   Hamming distance.
// - It is only defined for sequences of equal length. If there are 2 sequences
//   of unequal length, you should compute the Hamming distance over the
//   shorter length.


// Algorithm:
//  - Declare a class DNA
//  - Create a constructor class that takes 1 argument, a string representing
//    the DNA strand to compare against.
//  - Create a hammingDistance method that takes 1 string that is the other DNA
//    strand to compare with the one passed to the constructor method.

'use strict';

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(string) {
    let length = this._determineLength(string);
    let strand = this.strand.slice(0, length);
    let strandToCompare = string.slice(0, length);
    let distance = 0;

    [].forEach.call(strand, (char, idx) => {
      if (char !== strandToCompare[idx]) {
        distance += 1;
      }
    });

    return distance;
  }

  _determineLength(dnaString) {
    let length = this.strand.length;
    if (dnaString.length < length) {
      length = dnaString.length;
    }

    return length;
  }
}


module.exports = DNA;
