// PEDAC
// - Create a singly list with data pointing to the next element in the list.
// Explicit:
//  - singly list elements may contain a range of date such as number 1-10.
//  - provide functions to reverse the linked list and conver the linked list
//    to and from an array.
// Implicit:
//  - 'datum' method of element instance returns the data in the element.
//  - 'isTail' method on element instance returns true if the element is the
//    last element in the stack (at the bottom of the stack).
//  - 'next' method on element instance returns the next element in the stack,
//    the next element is provided to the constructor method when creating the
//    element. If there is no next element, null is returned.
//  - 'size' method of SimpleLinkedList instance returns the size or length of
//    the stack.
//  - 'isEmpty' method of SimpleLinkedList instance returns true if there are
//    no elements in the stack/list or the stack/list is empty.
//  - 'head' method of SimpleLinkedList instance returns the last element added
//    to the list. This last element added to the list is an instance of element,
//    with data what was pushed to the list for this element.
//  - 'peek' method of SimpleLinkedList instance returns datum of last element
//    added to the list (or datum of head).
//  - 'push' method of SimpleLinkedList adds new element to the list of type
//    Element


'use strict';

class Element {
  constructor(data, nextElement) {
    this.data = data;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return !this.nextElement;
  }

  next() {
    return this.nextElement ? this.nextElement : null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(data) {
    if (this.size() > 0) {
      let nextElement = this.list[this.list.length - 1];
      this.list.push(new Element(data, nextElement));
    } else {
      this.list.push(new Element(data));
    }

  }

  peek() {
    return this.isEmpty() ? null : this.list[this.list.length - 1].datum();
  }

  head() {
    return this.list[this.list.length - 1];
  }

  pop() {
    return this.list.pop().datum();
  }

  toArray() {
    let reversedList = [...this.list].reverse();

    return reversedList.map(element => {
      return element.datum();
    });
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

  static fromArray(array) {
    let newArray;
    if (!(array instanceof Array)) {
      newArray = [];
    } else {
      newArray = [...array];
    }


    newArray.reverse();
    let list = new SimpleLinkedList();

    newArray.forEach(element => {
      list.push(element);
    });

    return list;
  }
}

module.exports = {
  Element,
  SimpleLinkedList,
}
