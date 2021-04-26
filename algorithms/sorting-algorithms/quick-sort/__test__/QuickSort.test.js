import QuickSort from "../QuickSort";

describe("QuickSort", () => {
  it("should sort the array in ascending order", () => {
    let arr = [7, 9, 3, 2, 6];
    QuickSort.sort(arr, 0, arr.length - 1);
    expect(arr).toStrictEqual([2, 3, 6, 7, 9]);
  });
  it("should sort the array in ascending order", () => {
    let arr = [5, 2, 9, 7, 12, 3, 26, 1, 7];
    QuickSort.sort(arr, 0, arr.length - 1);
    expect(arr).toStrictEqual([1, 2, 3, 5, 7, 7, 9, 12, 26]);
  });
});
