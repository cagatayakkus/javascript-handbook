import BinarySearch from "../BinarySearch";

describe('BinarySearch', () => {
    it('should return false if the array is empty or unsorted', () => {
        const emptyArray = [];
        expect(BinarySearch.find(emptyArray, 5)).toBe(false);
        const unsortedArray = [1, 3, 7, 9, 6, 12, 17];
        expect(BinarySearch.find(unsortedArray, 7)).toBe(false);
    });
    it('should return the index after sorting process', () => {
        const array = [3, 7, 12, 15, 18, 22, 27];
        expect(BinarySearch.find(array, 12)).toBe(2);
    });
});