import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
    readonly?: boolean;
    error?: string;
}

export const ProfileCard = ({
    className,
    data,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeCurrency,
    onChangeCountry,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    isLoading,
    error,
    readonly,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            src={data?.avatar}
                            alt={`avatar-${data?.username}`}
                        />
                    </div>
                )}
                <Input
                    readonly={readonly}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                />
                <Input
                    readonly={readonly}
                    className={cls.input}
                    onChange={onChangeLastname}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                />
                <Input
                    readonly={readonly}
                    className={cls.input}
                    onChange={onChangeAge}
                    value={data?.age}
                    placeholder={t('Возраст')}
                />
                <CurrencySelect
                    className={cls.input}
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    onChange={onChangeCountry}
                    value={data?.country}
                    readonly={readonly}
                />
                <Input
                    readonly={readonly}
                    className={cls.input}
                    onChange={onChangeCity}
                    value={data?.city}
                    placeholder={t('Город')}
                />
                <Input
                    readonly={readonly}
                    className={cls.input}
                    onChange={onChangeUsername}
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                />
                <Input
                    readonly={readonly}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    value={data?.avatar}
                    placeholder={t('Ссылка на аватар')}
                />
            </div>
        </div>
    );
};
