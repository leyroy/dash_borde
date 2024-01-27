import React from "react";
import { Home } from "../pages";
import { NavBar, SideBar } from ".";

export default function Layout() {
	return (
		<div className="w-full bg-white pt-12 flex flex-col items-center justify-center">
			<NavBar />
			<div className="w-full flex">
				<SideBar />
				<Home />
			</div>
			{/* <Home  /> */}
			<div className="footer">Footer</div>
		</div>
	);
}
