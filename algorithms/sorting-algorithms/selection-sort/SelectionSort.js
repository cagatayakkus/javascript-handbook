export default class SelectionSort{
    static sort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            let minIdx = i;
            for (let j = i; j < array.length; j++) {
                if(array[j] < array[minIdx]) {
                    minIdx = j;
                }
            }
            var temp = array[i];
            array[i] = array[minIdx];
            array[minIdx] = temp;
        }
        return array;
    }
}