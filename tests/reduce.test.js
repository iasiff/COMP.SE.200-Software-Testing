import reduce from '../src/reduce.js';

describe('reduce', () => {
    test('should reduce an array to a single value', () => {
        expect(reduce([ 1, 2 ], (sum, n) => sum + n, 0)).toBe(3);
    });

    test('should reduce an object to a single value', () => {
        expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[ value ] || (result[ value ] = [])).push(key);
            return result;
        }, {})).toEqual({ '1': [ 'a', 'c' ], '2': [ 'b' ] });
    });

    test('should use the first element of the array as the initial value if no accumulator is provided', () => {
        expect(reduce([ 1, 2, 3 ], (sum, n) => sum + n)).toBe(6);
    });
});
