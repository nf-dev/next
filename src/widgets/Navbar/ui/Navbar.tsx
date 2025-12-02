import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {authData ? (
                <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            ) : (
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onOpenModal}
                >
                    {t('Войти')}
                </Button>
            )}
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
