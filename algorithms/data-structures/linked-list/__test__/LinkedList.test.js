import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  it("should create empty linked list at the beginning", () => {
    const linkedList = new LinkedList();
    expect(linkedList.size()).toBe(0);
  });

  it("should create a new node and append it to the list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.size()).toBe(0);
    expect(linkedList.append(3).value).toBe(3);
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(3);
    expect(linkedList.append(5).value).toBe(5);
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(5);
  });

  it("should create a new node and prepend it to the list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.prepend(3).value).toBe(3);
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(3);
    expect(linkedList.prepend(5).value).toBe(5);
    expect(linkedList.head.value).toBe(5);
    expect(linkedList.tail.value).toBe(3);
  });

  it("should delete the node of the given index", () => {
    const linkedList = new LinkedList();
    expect(linkedList.delete(3)).toBe(null);
    linkedList.append(3);
    expect(linkedList.delete(3).value).toBe(3);
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
    linkedList.append(3);
    linkedList.append(5);
    linkedList.append(7);
    linkedList.append(9);
    expect(linkedList.size()).toBe(4);
    expect(linkedList.delete(9).value).toBe(9);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.delete(5).value).toBe(5);
    expect(linkedList.size()).toBe(2);
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(7);
  });

  it("should return the size of the list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.size()).toBe(0);
    linkedList.append(3);
    linkedList.append(5);
    linkedList.append(7);
    linkedList.append(9);
    linkedList.append(11);
    expect(linkedList.size()).toBe(5);
  });

  it("should return the node of the given index", () => {
    const linkedList = new LinkedList();
    linkedList.append(3);
    linkedList.append(5);
    linkedList.append(7);
    linkedList.append(9);
    linkedList.append(11);
    expect(linkedList.get(3).value).toBe(9);
  });
});
