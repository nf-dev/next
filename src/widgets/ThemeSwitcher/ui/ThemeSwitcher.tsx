import { useTheme } from "app/providers/ThemeProvider";

import cls from "./ThemeSwitcher.module.scss";

import { classNames } from "shared/lib";

import { Theme } from "app/providers/ThemeProvider";

import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { Button } from "shared/ui";
import { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { toggleTheme, theme } = useTheme();

	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
