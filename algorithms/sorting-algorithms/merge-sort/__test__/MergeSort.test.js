import MergeSort from "../MergeSort";

describe("MergeSort", () => {
  it("should merge given two sorted arrays", () => {
    expect(MergeSort.merge([3, 5, 7, 8], [1, 12, 15])).toStrictEqual([1, 3, 5, 7, 8, 12, 15]);
  });
  it('should sort given unsorted array', () => {
      expect(MergeSort.mergeSort([1, 9, 24, 3, 20, 7, 4, 9])).toStrictEqual([1, 3, 4, 7, 9, 9, 20, 24]);
  });
});
