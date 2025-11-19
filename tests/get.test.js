import get from '../src/get.js';

describe('get', () => {
    const object = { 'a': [ { 'b': { 'c': 3 } } ] };

    test('should get a value from a path', () => {
        expect(get(object, 'a[0].b.c')).toBe(3);
    });

    test('should get a value from a path with an array', () => {
        expect(get(object, [ 'a', '0', 'b', 'c' ])).toBe(3);
    });

    test('should return a default value if the path does not exist', () => {
        expect(get(object, 'a.b.c', 'default')).toBe('default');
    });

    test('should return undefined if the path does not exist and no default value is provided', () => {
        expect(get(object, 'a.b.c')).toBeUndefined();
    });
});
