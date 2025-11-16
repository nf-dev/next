import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./styles/index.scss";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { useTheme } from "./providers/ThemeProvider/";
import { classNames } from "shared/lib";

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames("app", { hovered: true }, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
