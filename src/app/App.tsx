import { Suspense } from "react";

import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider/";
import { classNames } from "shared/lib";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", { hovered: true }, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
