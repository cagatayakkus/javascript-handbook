import Utils from "../../../utils/utils";

export default class BinarySearch {
    static find(arr, value) { 
        if(!Utils.checkSorted(arr) || arr.length == 0) return false;
        let left = 0;
        let right = arr.length - 1;
        while(left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if(arr[mid] == value) {
                return mid;
            }else if(arr[mid] < value){
                left = mid + 1;
            }else if(arr[mid] > value) {
                right = mid - 1;
            }
        }
    }
}