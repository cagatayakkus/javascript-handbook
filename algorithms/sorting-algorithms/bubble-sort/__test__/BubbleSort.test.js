import BubbleSort from '../BubbleSort';

describe('BubbleSort', () => {
    it('should sort the list in the ascending order', () => {
        let unsortedArray = [3, 7, 2, 1, 9, 6, 12, 3, 6];
        expect(BubbleSort.sort(unsortedArray)).toStrictEqual([1, 2, 3, 3, 6, 6, 7, 9, 12]);
    });
});