import {
    fetchProfileData,
    getProfileIsLoading,
    getProfileError,
    ProfileCard,
    profileReducer,
    profileActions,
    getProfileReadonly,
    getProfileFormData,
    getProfileValidateErrors,
} from 'entities/Profile';

import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const profileData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Некорректные пользовательские данные',
        ),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.NO_DATA]: t('Данные отсутствуют'),
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(
                profileActions.updateProfile({
                    currency,
                }),
            );
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(
                profileActions.updateProfile({
                    country,
                }),
            );
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value: string) => {
            const isDigitsOnly = /^\d*$/.test(value);

            if (isDigitsOnly) {
                dispatch(
                    profileActions.updateProfile({ age: Number(value) || 0 }),
                );
            }
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            {validateErrors?.length !== 0 &&
                validateErrors?.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        title={validateErrorTranslates[err]}
                    />
                ))}
            <ProfileCard
                data={profileData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCountry={onChangeCountry}
                onChangeCurrency={onChangeCurrency}
            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
