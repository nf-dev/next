import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        if (__PROJECT__ !== 'storybook') dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                {readonly ? (
                    <Button
                        onClick={onEdit}
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                    >
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <>
                        <Button
                            onClick={onCancelEdit}
                            theme={ButtonTheme.OUTLINE_RED}
                            className={cls.editBtn}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            onClick={onSave}
                            theme={ButtonTheme.OUTLINE}
                            className={cls.saveBtn}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};
