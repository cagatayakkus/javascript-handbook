// We are going to use same Node class which we have used while implementing Linked List
import Node from "../linked-list/Node";

export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  dequeue() {
    if (!this.head) return null;

    if ((this.head == this.tail)) {
      const temp = this.head;
      this.head = this.tail = null;
      return temp;
    }
    const currentNode = this.head;
    this.head = this.head.next;
    return currentNode;
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
