import { FC } from "react";

import { AppLink } from "shared/ui";

import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
	return (
		<nav className={classNames(cls.Navbar)}>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={"/"}
					className={cls.mainLink}
				>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
					About
				</AppLink>
			</div>
		</nav>
	);
};
