import Node from "./Node";

export default class LinkedList {

  // Constructs an Linked List with empty head and tail properties.
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Goes all the way through the list and appends a new node.
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return this.tail;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this.tail;
  }
  
  // Prepends a new node to the list.
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  // Deletes the given index node.
  delete(value) {
    if (this.head == null) return null;
    if (this.head.value == value) {
      if (this.head == this.tail) {
        var temp = this.head;
        this.head = this.tail = null;
        return temp;
      }
      var temp = this.head;
      this.head = this.head.next;
      return temp;
    }
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.value != value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next && currentNode.next.value == value) {
      if (currentNode.next == this.tail) {
        var temp = this.tail;
        this.tail = currentNode;
        this.tail.next = null;
        return temp;
      }
      var temp = currentNode.next;
      currentNode.next = currentNode.next.next;
      return temp;
    }

    return null;
  }

  // Returns the given index node.
  get(index) {
    if (!this.head) return null;
    let currentNode = this.head;
    let count = 0;
    while (count < index && currentNode.next) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  // Returns how many nodes this list includes.
  size() {
    if (!this.head) return 0;
    let currentNode = this.head;
    let count = 1;
    while (currentNode.next) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }
}
