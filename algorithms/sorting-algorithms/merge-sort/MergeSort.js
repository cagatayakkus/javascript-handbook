export default class MergeSort {
  static merge(array1, array2) {
    let result = [];
    let i = 0,
      j = 0;
    while (i < array1.length && j < array2.length) {
      if (array1[i] <= array2[j]) {
        result.push(array1[i]);
        i++;
      } else {
        result.push(array2[j]);
        j++;
      }
    }
    while (i < array1.length) {
      result.push(array1[i]);
      i++;
    }
    while (j < array2.length) {
      result.push(array2[j]);
      j++;
    }
    return result;
  }

  static mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = this.mergeSort(arr.slice(0, middle)); 
    let right = this.mergeSort(arr.slice(middle));
    return this.merge(left, right);
  }
}
