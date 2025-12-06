import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return correct value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '321' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('321');
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
