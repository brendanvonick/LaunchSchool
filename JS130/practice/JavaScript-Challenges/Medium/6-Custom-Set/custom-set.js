// PEDAC
// Undertanding the Problem:
//  Explicit Reqs:
//  - Define your own set type.
//  - All elements of a set must be numbers.
//  Implicit Reqs:


// Data Structure:
// class.
// set is an array.


'use strict';

class CustomSet {
  constructor(set = []) {
    this.set = set;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  isSubset(otherSet) {
    return this.set.every(element => {
      return otherSet.contains(element);
    });
  }

  isDisjoint(otherSet) {
    return !this.set.some(element => {
      return otherSet.contains(element);
    });
  }

  isSame(otherSet) {
    if (this.set.length === otherSet.set.length) {
      return this.isSubset(otherSet);
    } else {
      return false;
    }
  }

  add(element) {
    if (!this.contains(element)) {
      this.set.push(element);
    }

    return new CustomSet(this.set);
  }

  intersection(otherSet) {
    let newArray = [];
    this.set.forEach(element => {
      if (otherSet.contains(element)) {
        newArray.push(element);
      }
    });

    return new CustomSet(newArray);
  }

  difference(otherSet) {
    let newArray = [];
    this.set.forEach(element => {
      if (!otherSet.contains(element)) {
        newArray.push(element);
      }
    });

    return new CustomSet(newArray);
  }

  union(otherSet) {
    let newArray = [...this.set];

    otherSet.set.forEach(element => {
      if (!this.contains(element)) {
        newArray.push(element);
      }
    });

    return new CustomSet(newArray);
  }
}

module.exports = CustomSet;
