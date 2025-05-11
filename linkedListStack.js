const LinkedList = require("./linked-list");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    this.list.removeFromFront();
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

const stack = new LinkedListStack();

console.log(stack.isEmpty());

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.getSize());

stack.print();

stack.pop();
stack.print();
console.log(stack.peek());
