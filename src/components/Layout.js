import React from "react";
import { Dashbord } from "../pages";
import { NavBar, SideBar } from ".";

export default function Layout({ setIsAuth }) {
	return (
		<div className="w-full bg-gray-300 pt-12 flex flex-col items-center justify-center">
			<NavBar setIsAuth={setIsAuth} />
			<div className="w-full flex">
				<div className="sticky">
					<SideBar />
				</div>
				<Dashbord />
			</div>
			<div className="footer">Footer</div>
		</div>
	);
}