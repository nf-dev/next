import { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";

import { classNames } from "shared/lib";

export enum ThemeButton {
	CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	theme = ThemeButton.CLEAR,
	...otherProps
}) => {
	return (
		<button
			{...otherProps}
			className={classNames(cls.Button, {}, [className, cls[theme]])}
		>
			{children}
		</button>
	);
};
