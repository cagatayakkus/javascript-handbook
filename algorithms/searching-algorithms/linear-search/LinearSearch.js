export default class LinearSearch {
    static find(arr, value) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] == value) {
                return i;
            }
        }
        return null;
    }
}