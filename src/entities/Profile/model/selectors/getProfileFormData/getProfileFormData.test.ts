import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData', () => {
    test('should return form data', () => {
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
                form: data,
            },
        };
        expect(getProfileFormData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
    });
});
