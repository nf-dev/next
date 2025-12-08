import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    first: 'Nikita',
    lastname: 'Some',
    age: 123,
    currency: Currency.EUR,
    country: Country.Armenia,
    username: 'admin',
    avatar: 'https://placehold.co/300x300',
};

describe('validateProfileData', () => {
    test('invalid firstname', () => {
        expect(validateProfileData()).toEqual([ValidateProfileError.NO_DATA]);
    });
    test('invalid firstname', () => {
        expect(validateProfileData({ ...data, first: '' })).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('invalid lastname', () => {
        expect(validateProfileData({ ...data, lastname: '' })).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('invalid age', () => {
        expect(validateProfileData({ ...data, age: 2.11 })).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('invalid country', () => {
        expect(validateProfileData({ ...data, country: undefined })).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
