// A circular queue is a collection of objects stored in a buffer that is
// treated as though it is connected end-to-end in a circle. When an object is
// added to this circular queue, it is added to the position that immediately
// follows the most recently added object, while removing an object always
// removes the object that has been in the queue the longest.
//
// This works as long as there are empty spots in the buffer. If the buffer
// becomes full, adding a new object to the queue requires getting rid of an
// existing object; with a circular queue, the object that has been in the
// queue the longest is discarded and replaced by the new object.
//
// Assuming we have a circular queue with room for 3 objects, the circular
// queue looks and acts like this:


// Your task is to write a CircularQueue class that implements a circular
// queue for arbitrary objects. The class should obtain the buffer size with
// an argument provided to the constructor, and should provide the following
// methods:
//
// enqueue to add an object to the queue
// dequeue to remove (and return) the oldest object in the queue. It should
// return null if the queue is empty.
// You may assume that none of the values stored in the queue are null
// (however, null may be used to designate empty spots in the buffer).
//
// Examples:

class CircularQueue {
  constructor(size) {
    this.buffer = new Array(size).fill(null);
    this.nextPosition = 0;
    this.oldestPosition = 0;
  }

  enqueue(object) {
    if (this.buffer[this.nextPosition] !== null) {
      this.oldestPosition = this.increment(this.nextPosition);
    }
    this.buffer[this.nextPosition] = object;
    this.nextPosition = this.increment(this.nextPosition);
  }

  dequeue() {
    let value = this.buffer[this.oldestPosition];
    this.buffer[this.oldestPosition] = null;
    if (value !== null) {
      this.oldestPosition = this.increment(this.oldestPosition);
    }
    return value;
  }

  increment(position) {
    return (position + 1) % this.buffer.length;
  }
}




let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
