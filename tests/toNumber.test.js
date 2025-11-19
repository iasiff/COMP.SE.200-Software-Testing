import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
    test('should convert a value to a number', () => {
        expect(toNumber(3.2)).toBe(3.2);
        expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
        expect(toNumber(Infinity)).toBe(Infinity);
        expect(toNumber('3.2')).toBe(3.2);
    });

    test('should return NaN for non-numeric values', () => {
        expect(toNumber('abc')).toBe(NaN);
        expect(toNumber(null)).toBe(0);
    });
});
