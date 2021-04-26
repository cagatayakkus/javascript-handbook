import DoublyLinkedList from "../DoublyLinkedList";

describe("DoublyLinkedList", () => {
  it("should create empty doubly linked list at the beginning", () => {
    var doublyLinkedList = new DoublyLinkedList();
    expect(doublyLinkedList.size()).toBe(0);
  });
  it("should create a new node and append it to the list", () => {
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(3);
    doublyLinkedList.append(5);
    var newNode = doublyLinkedList.append(7);
    expect(newNode.previous.value).toBe(5);
    expect(newNode.previous.previous.value).toBe(3);
    expect(doublyLinkedList.size()).toBe(3);
    expect(doublyLinkedList.head.value).toBe(3);
    expect(doublyLinkedList.tail.value).toBe(7);
  });
  it("should create a new node and prepend it to the list", () => {
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.prepend(1);
    expect(doublyLinkedList.size()).toBe(1);
    expect(doublyLinkedList.head.value).toBe(1);
    expect(doublyLinkedList.tail.value).toBe(1);
    doublyLinkedList.append(5);
    doublyLinkedList.append(7);
    var nodeNine = doublyLinkedList.append(9);
    expect(nodeNine.previous.value).toBe(7);
    expect(nodeNine.previous.previous.value).toBe(5);
    doublyLinkedList.prepend(3);
    expect(nodeNine.previous.previous.previous.previous.value).toBe(3);
    expect(doublyLinkedList.head.value).toBe(3);
  });
  it("should delete the given value when first match occurs", () => {
    var doublyLinkedList = new DoublyLinkedList();
    expect(doublyLinkedList.delete(3)).toBe(null);
    doublyLinkedList.append(3);
    doublyLinkedList.append(5);
    expect(doublyLinkedList.delete(5).value).toBe(5);
    expect(doublyLinkedList.head.value).toBe(3);
    expect(doublyLinkedList.tail.value).toBe(3);
    doublyLinkedList.append(5);
    doublyLinkedList.append(7);
    doublyLinkedList.append(9);
    expect(doublyLinkedList.delete(7).value).toBe(7);
    expect(doublyLinkedList.tail.previous.value).toBe(5);
    expect(doublyLinkedList.get(1).next.value).toBe(9);
  });
  it("should return the size of the list",() => {
      var doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.append(1);
      doublyLinkedList.append(3);
      doublyLinkedList.append(5);
      doublyLinkedList.append(7);
      doublyLinkedList.append(9);
      expect(doublyLinkedList.size()).toBe(5);
  });
  it("should return the given index of node", () => {
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(3);
    doublyLinkedList.append(5);
    doublyLinkedList.append(7);
    doublyLinkedList.append(9);
    expect(doublyLinkedList.get(2).value).toBe(7);
  });
});
