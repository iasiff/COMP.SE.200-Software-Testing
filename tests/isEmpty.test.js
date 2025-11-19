import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    test('should return true for empty values', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(true)).toBe(true);
        expect(isEmpty(1)).toBe(true);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty({})).toBe(true);
    });

    test('should return false for non-empty values', () => {
        expect(isEmpty([ 1, 2, 3 ])).toBe(false);
        expect(isEmpty('abc')).toBe(false);
        expect(isEmpty({ 'a': 1 })).toBe(false);
    });
});
