import { checkSorted } from "../utils";

describe('checkSorted', () => {
    it('should check the array if it is sorted or not', () => {
        const array = [1, 3, 7, 12, 16, 27];
        expect(checkSorted(array)).toBe(true);
        const anotherArray = [1, 3, 8, 9, 7, 12, 15];
        expect(checkSorted(anotherArray)).toBe(false);
    });
});