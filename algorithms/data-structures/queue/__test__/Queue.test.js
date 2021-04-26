import Queue from "../Queue";

describe("Queue", () => {
  it("should be empty at the initialization", () => {
    const q = new Queue();
    expect(q.size()).toBe(0);
  });
  it("should increase the size according to added nodes", () => {
    const q = new Queue();
    q.enqueue(3);
    q.enqueue(5);
    q.enqueue(7);
    q.enqueue(9);
    expect(q.size()).toBe(4);
  });
  it("should assign the newly enqueued node as head & tail at the same time if the queue is empty.", () => {
    const q = new Queue();
    expect(q.enqueue(3).value).toBe(3);
    expect(q.head.value).toBe(3);
    expect(q.tail.value).toBe(3);
  });
  it("should assign the newly enqueued node as tail", () => {
    const q = new Queue();
    q.enqueue(3);
    q.enqueue(5);
    q.enqueue(7);
    q.enqueue(9);
    expect(q.tail.value).toBe(9);
  });
  it("should return the head when the queue is dequeued", () => {
    const q = new Queue();
    expect(q.dequeue()).toBe(null);

    q.enqueue(3);
    expect(q.size()).toBe(1);
    expect(q.dequeue().value).toBe(3);
    expect(q.size()).toBe(0);
    expect(q.head).toBe(null);
    expect(q.tail).toBe(null);

    q.enqueue(3);
    q.enqueue(5);
    q.enqueue(7);
    q.enqueue(9);

    expect(q.size()).toBe(4);

    expect(q.head.value).toBe(3);
    expect(q.head.next.value).toBe(5);
    expect(q.head.next.next.value).toBe(7);
    expect(q.head.next.next.next.value).toBe(9);
    expect(q.tail.value).toBe(9);

    expect(q.dequeue().value).toBe(3);
    expect(q.size()).toBe(3);

    expect(q.dequeue().value).toBe(5);
    expect(q.size()).toBe(2);

    expect(q.dequeue().value).toBe(7);
    expect(q.size()).toBe(1);

    expect(q.dequeue().value).toBe(9);
    expect(q.size()).toBe(0);

    expect(q.dequeue()).toBe(null);
  });
});
