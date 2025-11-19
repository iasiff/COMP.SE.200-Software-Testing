import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {
    test('should return the default value if the value is null, undefined', () => {
        expect(defaultTo(1, 10)).toBe(1);
        expect(defaultTo(undefined, 10)).toBe(10);
        expect(defaultTo(null, 10)).toBe(10);
    });
});
