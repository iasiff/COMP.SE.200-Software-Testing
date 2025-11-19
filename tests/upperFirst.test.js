import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
    test('should convert the first character of a string to upper case', () => {
        expect(upperFirst('fred')).toBe('Fred');
        expect(upperFirst('FRED')).toBe('FRED');
    });

    test('should return an empty string if the input is an empty string', () => {
        expect(upperFirst('')).toBe('');
    });

    test('should return the same string if the first character is already in upper case', () => {
        expect(upperFirst('Fred')).toBe('Fred');
    });
});
