import React, { useEffect, useState } from "react";
import { Layout } from "./components";
import { Login } from "./pages";

function App() {
	const [isAuth, setIsAuth] = useState(false); // replace this with your actual auth logic

	return (
		<div className="w-full min-h-[100vh%]">
			{isAuth ? (
				<Layout setIsAuth={setIsAuth} />
			) : (
				<Login setisAuth={setIsAuth} />
			)}
		</div>
	);
}

export default App;
