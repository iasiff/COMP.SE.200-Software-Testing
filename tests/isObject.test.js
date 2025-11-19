import isObject from '../src/isObject.js';

describe('isObject', () => {
    test('should return true for objects', () => {
        expect(isObject({})).toBe(true);
        expect(isObject([ 1, 2, 3 ])).toBe(true);
        expect(isObject(new Function)).toBe(true);
    });

    test('should return false for non-objects', () => {
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(123)).toBe(false);
        expect(isObject('abc')).toBe(false);
    });
});
