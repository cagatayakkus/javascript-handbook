import Stack from "../Stack";

describe("Stack", () => {
  it('should be empty at the initialization', () => {
      const s = new Stack();
      expect(s.size()).toBe(0);
  });
  it('should increase the size according to added nodes', () => {
      const s = new Stack();
      s.push(3);
      s.push(5);
      s.push(7);
      s.push(9);
      expect(s.size()).toBe(4);
  });
  it("should assign given parameter as head if the stack is null", () => {
    const s = new Stack();
    expect(s.push(5).value).toBe(5);
    expect(s.head.value).toBe(5);
    expect(s.tail.value).toBe(5);
  });

  it("should assign given parameter as tail if the stack is not empty", () => {
    const s = new Stack();
    s.push(3);
    expect(s.push(5).value).toBe(5);
    expect(s.head.value).toBe(3);
    expect(s.tail.value).toBe(5);
  });

  it("should return the element which pushed last", () => {
    const s = new Stack();
    expect(s.pop()).toBe(null);
    s.push(3);
    expect(s.pop().value).toBe(3);
    expect(s.head).toBe(null);
    expect(s.tail).toBe(null);
    s.push(3);
    s.push(5);
    expect(s.pop().value).toBe(5);
    expect(s.head.value).toBe(3);
    expect(s.tail.value).toBe(3);
    s.push(3);
    s.push(5);
    s.push(7);
    s.push(9);
    expect(s.pop().value).toBe(9);
    expect(s.tail.value).toBe(7);
  });
});
