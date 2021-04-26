// We are going to use 'select last element as pivot" approach while implementing Quick Sort.

export default class QuickSort {
  static _swap(arr, firstIndex, secondIndex) {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }
  static _partition = (arr, s, e) => {
    const pivot = arr[e];
    let pIndex = s;
    for (let i = s; i < e; i++) {
      if (arr[i] <= pivot) {
        this._swap(arr, pIndex, i);
        pIndex++;
      }
    }
    this._swap(arr, e, pIndex);
    return pIndex;
  };
  static sort(arr, s, e) {
    if (s < e) {
      const p = this._partition(arr, s, e);
      this.sort(arr, s, p - 1);
      this.sort(arr, p + 1, e);
    }
  }
}
