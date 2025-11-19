import map from '../src/map.js';

describe('map', () => {
    function square(n) {
        return n * n;
    }

    test('should map over an array and return a new array', () => {
        expect(map([ 4, 8 ], square)).toEqual([ 16, 64 ]);
    });

    test('should return an empty array if the input array is empty', () => {
        expect(map([], square)).toEqual([]);
    });

    test('should return a new array', () => {
        const array = [ 4, 8 ];
        const mappedArray = map(array, square);
        expect(mappedArray).not.toBe(array);
    });
});
