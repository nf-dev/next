import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/profile';

describe('profileSlice', () => {
    test('test set is readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(false),
            ),
        ).toEqual({
            ...state,
            readonly: false,
        });
    });

    test('test cancel edit', () => {
        const data = { first: 'Admin', lastname: 'Admin' };

        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            readonly: true,
            error: undefined,
            profileData: data,
            form: undefined,
            validateErrors: undefined,
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            isLoading: false,
            readonly: true,
            error: undefined,
            profileData: data,
            form: data,
            validateErrors: [],
        });
    });

    test('test save edit', () => {
        const data = { first: 'Admin', lastname: 'Admin' };

        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            readonly: true,
            error: undefined,
            profileData: undefined,
            form: data,
            validateErrors: undefined,
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.saveEdit()),
        ).toEqual({
            isLoading: false,
            readonly: true,
            error: undefined,
            profileData: data,
            form: data,
            validateErrors: undefined,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            readonly: true,
            error: undefined,
            profileData: undefined,
            form: { first: 'Old', lastname: 'User' },
            validateErrors: undefined,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ first: 'NewName' }),
            ),
        ).toEqual({
            isLoading: false,
            readonly: true,
            error: undefined,
            profileData: undefined,
            form: { first: 'NewName', lastname: 'User' },
            validateErrors: undefined,
        });
    });
});
