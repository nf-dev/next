import { FC } from 'react';

import { AppLink } from 'shared/ui';

import { classNames } from 'shared/lib';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => (
    <nav className={classNames(cls.Navbar)}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                About
            </AppLink>
        </div>
    </nav>
);
