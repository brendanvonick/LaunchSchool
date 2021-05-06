// Write a program that can calculate the Hamming distance between two DNA
// strands.
//
// A mutation is simply a mistake that occurs during the creation or copying of
// a nucleic acid, in particular DNA. Because nucleic acids are vital to
// cellular functions, mutations tend to cause a ripple effect throughout the
// cell. Although mutations are technically mistakes, a very rare mutation may
// equip the cell with a beneficial attribute. In fact, the macro effects of
// evolution are attributable by the accumulated result of beneficial
// microscopic mutations over many generations.
//
// The simplest and most common type of nucleic acid mutation is a point
// mutation, which replaces one base with another at a single nucleotide.
//
// By counting the number of differences between two homologous DNA strands
// taken from different genomes with a common ancestor, we get a measure of the
// minimum number of point mutations that could have occurred on the
// evolutionary path between the two strands.
//
// This is called the Hamming distance.

// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^

// The Hamming distance between these two DNA strands is 7.

// The Hamming distance is only defined for sequences of equal length. If you
// have two sequences of unequal length, you should compute the Hamming
// distance over the shorter length.

// PEDAC
// Understanding the Problem:
// - Given 2 strings representing DNA strands, the Hamming distance is the number
//   of differences in characters between the 2 strings.
// - If one string is longer than the other, the shorter one should be used for
//   comparison

// Data Structure:
// - The primary data structure should be a class or constructor function that
//   takes 1 argument, a DNA strand. It should have 1 method, 'hammingDistance'
//   that returns the Hamming distance between the the DNA structure created
//   from the class or constructor and the one supplied to the method as an argument.

// Algorithm:

// Constructor:
// Define a constructor or class 'DNA' with 1 instance property.
// Set the instance property to be the argument DNA string passed into the
//  constructor when called.
// Set one instance method on the constructor, 'hammingDistance' that takes
//  one argument, another DNA string to compare for mutations.

// 'hammingDistance' Instance Method:
// set variable dnaCopy to be a copy of the dnaString property of the object.
// set a result varliable to be 0.
// if clause: if the dnaCopy string is longer than the argument string
//    set dnaCopy to be the length of the argument string.
// else clause: if the dnaCopy string is shorter than the argument string
//    set the argument string to be the length of the dnaCopy string
// end clause
// iterate over the characters in dnaCopy string
//    if clause: if the character in dnaCopy at the given index doesn't match
//    the character in the argument string at the same index:
//        add 1 to the result value
//    end clause
// return the result

'use strict';

class DNA {
  constructor(dnaString) {
    this.dnaString = dnaString
  }

  hammingDistance(otherString) {
    let dnaCopy = this.dnaString;
    let result = 0;

    if (dnaCopy.length > otherString.length) {
      dnaCopy = this.dnaString.slice(0, otherString.length);
    } else if (dnaCopy.length < otherString.length) {
      otherString = otherString.slice(0, dnaCopy.length);
    }

    for (let idx = 0; idx < dnaCopy.length; idx += 1) {
      if (dnaCopy[idx] !== otherString[idx]) result += 1;
    };

    return result;
  }
}


let dna = new DNA('AGACAACAGCCAGCCGCCGGATT');
console.log(dna.hammingDistance('AGGCAA'));

module.exports = DNA;
