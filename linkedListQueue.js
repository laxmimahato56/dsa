const LinkedList = require("./linked-list");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

queue.print();

queue.dequeue();
queue.print();
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.getSize());
