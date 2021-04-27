import CircularLinkedList from "../CircularLinkedList";

describe("CircularLinkedList", () => {
  it("should be empty at the initialization", () => {
    const c = new CircularLinkedList();
    expect(c.head).toBe(null);
    expect(c.tail).toBe(null);
    expect(c.size()).toBe(0);
  });
  it("should assign the appended node as head & tail at the same time if the list is empty", () => {
    const c = new CircularLinkedList();
    c.append(3);
    expect(c.head.value).toBe(3);
    expect(c.tail.value).toBe(3);
    expect(c.head == c.tail).toBe(true);
    expect(c.size()).toBe(1);
  });
  it("should assign the appended node as tail if the list is not empty", () => {
    const c = new CircularLinkedList();
    c.append(3);
    c.append(5);
    expect(c.head.value).toBe(3);
    expect(c.tail.value).toBe(5);
    expect(c.size()).toBe(2);
  });
  it("should return the head node when we use tail.next notation", () => {
    const c = new CircularLinkedList();
    c.append(3);
    c.append(5);
    c.append(7);
    expect(c.head.value).toBe(3);
    expect(c.head.next.value).toBe(5);
    expect(c.head.next.next.value).toBe(7);
    expect(c.head.next.next).toBe(c.tail);
    expect(c.tail.next).toBe(c.head);
  });
  it("should assign the pretended value as head & tail at the same time when the list is empty", () => {
    const c = new CircularLinkedList();
    c.prepend(3);
    expect(c.head.value).toBe(3);
    expect(c.tail.value).toBe(3);
    expect(c.head == c.tail).toBe(true);
    expect(c.size()).toBe(1);
  });
  it("should assign the pretended value as head if the list is not empty", () => {
    const c = new CircularLinkedList();
    c.prepend(7);
    c.prepend(5);
    expect(c.head.value).toBe(5);
    expect(c.tail.value).toBe(7);
    expect(c.size()).toBe(2);
    c.prepend(3);
    expect(c.head.value).toBe(3);
    expect(c.head.next.next == c.tail).toBe(true);
  });
  it("should return null if the list is empty when any value is tried to delete", () => {
    const c = new CircularLinkedList();
    expect(c.delete(3)).toBe(null);
  });
  it("should return the node if the node which is tried to delete and it is head and tail at the same time", () => {
    const c = new CircularLinkedList();
    c.append(3);
    expect(c.delete(3).value).toBe(3);
    expect(c.head).toBe(null);
    expect(c.tail).toBe(null);
  });
  it('should assign the head\'s next node as the new head if head is tried to delete and the list has more than 1 element', () => {
    const c = new CircularLinkedList();
    c.append(3);
    c.append(5);
    c.append(7);
    c.append(9);
    expect(c.delete(3).value).toBe(3);
    expect(c.head.value).toBe(5);
    expect(c.tail.next.value).toBe(5)
  });
  it('should delete the node which is given as parameter', () => {
      const c = new CircularLinkedList();
      c.append(3);
      c.append(5);
      c.append(7);
      expect(c.delete(5).value).toBe(5);
      expect(c.head.value).toBe(3);
      expect(c.tail.value).toBe(7);
      expect(c.head.next == c.tail).toBe(true);
  });
  it('should delete the node successfully even it is tail', () => {
    const c = new CircularLinkedList();
    c.append(3);
    c.append(5);
    c.append(7);
    expect(c.delete(7).value).toBe(7);
    expect(c.tail.value).toBe(5);
    expect(c.tail.next == c.head).toBe(true);
  });
});
