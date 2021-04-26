import SelectionSort from '../SelectionSort';

describe('SelectionSort', () => {
    it('should sort the list in the ascending order', () => {
        let unsortedArray = [4, 2, 1, 7, 4, 8, 12, 3, 6];
        expect(SelectionSort.sort(unsortedArray)).toStrictEqual([1, 2, 3, 4, 4, 6, 7, 8, 12]);
    });
});