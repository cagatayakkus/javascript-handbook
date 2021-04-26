// We are going to use same Node class which we have used while implementing Linked List
import Node from "../linked-list/Node";

export default class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.head == this.tail) {
      const temp = this.head;
      this.head = this.tail = null;
      return temp;
    }

    let currentNode = this.head;
    while (currentNode.next != this.tail) {
      currentNode = currentNode.next;
    }
    const temp = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;
    return temp;
  }

  size() {
    let count = 0;
    if (!this.head) return count;

    let currentNode = this.head;
    count++;

    while (currentNode.next) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }
}
