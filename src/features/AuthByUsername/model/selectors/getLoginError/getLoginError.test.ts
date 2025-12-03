import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return correct value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'Error' },
        };
        expect(getLoginError(state as StateSchema)).toBe('Error');
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});
