import { loginActions, loginReducer } from './loginSlice';
import { loginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    test('test set is username', () => {
        const state: DeepPartial<loginSchema> = {
            username: '',
        };

        expect(
            loginReducer(
                state as loginSchema,
                loginActions.setUsername('admin'),
            ),
        ).toEqual({ username: 'admin' });
    });
    test('test set is password', () => {
        const state: DeepPartial<loginSchema> = {
            password: '',
        };

        expect(
            loginReducer(
                state as loginSchema,
                loginActions.setPassword('123123'),
            ),
        ).toEqual({ password: '123123' });
    });
});
