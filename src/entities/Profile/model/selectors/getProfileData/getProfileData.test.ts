import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return profile data', () => {
        const data = {
            first: 'Nikita',
            lastname: 'Some',
            age: 123,
            currency: Currency.EUR,
            country: Country.Armenia,
            username: 'admin',
            avatar: 'https://placehold.co/300x300',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                profileData: data,
                readonly: true,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
