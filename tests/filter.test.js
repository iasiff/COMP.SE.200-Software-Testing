import filter from '../src/filter.js';

describe('filter', () => {
    test('should filter an array', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        expect(filter(users, ({ active }) => active)).toEqual([ { 'user': 'barney', 'active': true } ]);
    });

    test('should return an empty array if no elements pass the predicate check', () => {
        const users = [
            { 'user': 'barney', 'active': false },
            { 'user': 'fred', 'active': false }
        ];
        expect(filter(users, ({ active }) => active)).toEqual([ [] ]);
    });

    test('should return a new array', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ];
        const filteredUsers = filter(users, ({ active }) => active);
        expect(filteredUsers).not.toBe(users);
    });
});
