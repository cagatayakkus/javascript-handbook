// We are going to use same Node class which we have used while implementing Linked List
import Node from "../linked-list/Node";

export default class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return newNode;
    }
    this.tail.next = newNode;
    newNode.next = this.head;
    this.tail = newNode;
    return newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return newNode;
    }
    newNode.next = this.head;
    this.tail.next = newNode;
    this.head = newNode;
    return newNode;
  }

  delete(value) {
    if (!this.head) return null;

    if (this.head.value == value) {
      if (this.head == this.tail) {
        const tempNode = this.head;
        this.head = this.tail = null;
        return tempNode;
      }
      const tempNode = this.head;
      this.tail.next = this.head.next;
      this.head = this.head.next;
      return tempNode;
    }

    let currentNode = this.head;
    while (currentNode.next != this.head && currentNode.next.value != value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next.value == value) {
      const deletedNode = currentNode.next;
      if (currentNode.next == this.tail) {
          this.tail = currentNode;
      }
      currentNode.next = currentNode.next.next;
      return deletedNode;
    }
  }

  size() {
    let count = 0;
    if (!this.head) return count;
    let currentNode = this.head;
    count++;
    while (currentNode.next && currentNode.next != this.head) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }
}
