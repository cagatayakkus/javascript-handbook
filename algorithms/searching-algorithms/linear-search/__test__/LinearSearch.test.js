import LinearSearch from '../LinearSearch';

describe('LinearSearch', () => {
    it('should return the value if it exists', () => {
        const arr = [9, 5, 1, 27, 6, 9, 32];
        expect(LinearSearch.find(arr, 9)).toBe(0);
        expect(LinearSearch.find(arr, 5)).toBe(1);
        expect(LinearSearch.find(arr, 27)).toBe(3);
        expect(LinearSearch.find(arr, 32)).toBe(arr.length - 1);
        expect(LinearSearch.find(arr, 2)).toBe(null);
    });
});