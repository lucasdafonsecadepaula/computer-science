class Queue {
  constructor() {
    this.items = [];
  }

  enQueue(element) {
    return this.items.push(element);
  }

  deQueue() {
    return this.items.shift();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

class QueueImproved {
  constructor() {
    this.items = {};
    this.frontPointer = 0;
    this.backPointer = 0;
  }

  enQueue(element) {
    this.items[this.backPointer] = element;
    this.backPointer++;
  }

  deQueue() {
    const item = this.items[this.frontPointer];
    delete this.items[this.frontPointer];
    this.frontPointer++;
    return item;
  }

  peek() {
    return this.items[this.frontPointer];
  }

  isEmpty() {
    return this.backPointer - this.frontPointer === 0;
  }

  size() {
    return this.backPointer - this.frontPointer;
  }

  print() {
    console.log(this.items);
  }
}

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.frontPointer = -1;
    this.backPointer = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enQueue(element) {
    if (!this.isFull()) {
      this.backPointer = (this.backPointer + 1) % this.capacity;
      this.items[this.backPointer] = element;
      this.currentLength += 1;

      if (this.frontPointer === -1) {
        this.frontPointer = this.backPointer;
      }
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.frontPointer];
    this.items[this.frontPointer] = null;
    this.frontPointer += 1;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.frontPointer = -1;
      this.backPointer = -1;
    }

    return item;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) return console.log("isEmpty");

    // impleentar
  }
}
