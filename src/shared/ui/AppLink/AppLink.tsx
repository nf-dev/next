import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import cls from "./AppLink.module.scss";

import { classNames } from "shared/lib";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
	to,
	className,
	children,
	theme = AppLinkTheme.PRIMARY,
	...otherProps
}) => {
	return (
		<Link
			to={to}
			{...otherProps}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
		>
			{children}
		</Link>
	);
};
