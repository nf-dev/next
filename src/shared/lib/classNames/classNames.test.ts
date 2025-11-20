import { classNames } from './classNames';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('cls')).toBe('cls');
    });
    test('with mods', () => {
        expect(classNames('cls', { mods: true })).toBe('cls mods');
    });

    test('with additional', () => {
        const expected = 'cls additional1 additional2';
        expect(classNames('cls', {}, ['additional1', 'additional2'])).toBe(
            expected,
        );
    });

    test('with mods false', () => {
        const expected = 'cls mods additional1 additional2';
        expect(
            classNames('cls', { mods: true, visible: false }, [
                'additional1',
                'additional2',
            ]),
        ).toBe(expected);
    });
});
