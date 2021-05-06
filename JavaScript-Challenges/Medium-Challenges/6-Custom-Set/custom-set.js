'use strict';


class CustomSet {
  constructor(set) {
    this.set = set || [];
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  isSubset(custSet) {
    return this.set.every(element => {
      return custSet.set.includes(element);
    });
  }

  isDisjoint(custSet) {
    return this.set.every(element => {
      return !custSet.set.includes(element);
    });
  }

  isSame(custSet) {
    return this.set.length === custSet.set.length &&
           this.set.every(element => {
             return custSet.set.includes(element);
           });
  }

  add(element) {
    if (!this.set.includes(element)) {
      return new CustomSet(this.set.concat(element));
    } else {
      return new CustomSet(this.set);
    }
  }

  intersection(custSet) {
    let intersect = this.set.filter(element => {
      return custSet.set.includes(element);
    });

    return new CustomSet(intersect);
  }

  difference(custSet) {
    let differingSet = this.set.filter(element => {
      return !custSet.set.includes(element);
    });

    return new CustomSet(differingSet);
  }

  union(custSet) {
    let newElements = custSet.set.filter(element => {
      return !this.set.includes(element);
    });
    return new CustomSet(this.set.concat(newElements));
  }
}

module.exports = CustomSet;
