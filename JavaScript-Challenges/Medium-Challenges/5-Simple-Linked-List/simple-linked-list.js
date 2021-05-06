'use strict';


class Element {
  constructor(data, nextElement) {
    this.data = data;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  next() {
    if (this.nextElement) {
      return this.nextElement;
    } else {
      return null;
    }
  }

  isTail() {
    return !this.next();
  }
}


class SimpleLinkedList {

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (array !==null) {
      let newArray = [...array];
      newArray.reverse();
      newArray.forEach(element => {
        list.push(element);
      });
    }

    return list;
  }

  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  push(data) {
    let element = new Element(data, this.list[this.list.length - 1]);
    this.list.push(element);
  }

  peek() {
    if (this.head()) {
      return this.head().datum()
    } else {
      return null;
    }
  }

  head() {
    return this.list[this.list.length - 1] || null;
  }

  pop() {
    return this.list.pop(this.list.length - 1).datum();
  }

  toArray() {
    let array = this.list.map(element => {
      return element.datum();
    });

    return array.reverse();
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }
}


module.exports = { SimpleLinkedList, Element };
