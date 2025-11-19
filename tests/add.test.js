import add from '../src/add.js';

describe('add', () => {
    test('should add two numbers', () => {
        expect(add(6, 4)).toBe(10);
        expect(add(-6, 4)).toBe(-2);
        expect(add(-6, -4)).toBe(-10);
    });

    test('should not throw an error if one of the arguments is not a number', () => {
        expect(() => add(6, '4')).not.toThrow();
    });
});
