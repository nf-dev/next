import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount((prev) => prev + 1);

	return (
		<>
			<button onClick={increment} className={classes.button}>
				{count}
			</button>
		</>
	);
};
