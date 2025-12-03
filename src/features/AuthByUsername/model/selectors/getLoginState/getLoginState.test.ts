import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return correct value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '321', username: 'admin', isLoading: true },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            password: '321',
            username: 'admin',
            isLoading: true,
        });
    });
});
