import { Suspense } from "react";
import { Link } from "react-router-dom";

import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider/";
import { classNames } from "shared/lib";
import { AppRouter } from "./providers/router";

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames("app", { hovered: true }, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>About</Link>
			<AppRouter />
		</div>
	);
};

export default App;
