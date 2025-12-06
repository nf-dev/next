import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should return correct value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
