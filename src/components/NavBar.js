import React from "react";
import avater from "../media/phototo.webp";
import {
	IoNotifications,
	IoSettings,
	IoSearch,
} from "react-icons/io5";

function NavBar({ setIsAuth }) {
	return (
		<div className="fixed z-10 w-full left-0 right-0 top-0 bg-teal-800 shadow-lg px-5 lg:px-12 py-2">
			<div className="flex items-center justify-between rounded-full">
				<div className="flex items-center gap-4 border-r pr-4 border-gray-900  justify-center">
					<div className="w-9 rounded-full h-9 ">
						<img
							src={avater}
							className="rounded-full "
							fill
							alt="log"
						/>
					</div>
					<h1 className="text-white font-extrabold text-2xl">
						Addmin DashBord
					</h1>
				</div>
				<div className="flex items-center justify-center gap-5">
					<div className=" relative hover:bg-yellow-200 duration-300 transition-all ease-in-out rounded-full p-1 flex items-center text-gray-900 justify-center font-bold">
						<IoSearch className="cursor-pointer h-7 w-7 text-2xl" />
					</div>
					<div className=" relative text-gray-900 hover:bg-yellow-200 duration-300 transition-all ease-in-out rounded-full p-1 flex items-center justify-center font-bold">
						<IoNotifications className="cursor-pointer h-7 w-7  text-2xl" />
						<span className="text-sm w-6 flex items-center justify-center text-white h-6 bg-red-600 rounded-full absolute -top-2 -right-2 cursor-pointer">
							1
						</span>
					</div>
					<div className=" relative hover:bg-yellow-200 duration-300 transition-all ease-in-out rounded-full p-1 flex items-center text-gray-900 justify-center font-bold">
						<IoSettings className="cursor-pointer h-7 w-7 text-2xl" />
					</div>
					<div className="w-9 relative group rounded-full h-9 ">
						<img
							src={avater}
							className="rounded-full"
							fill
							alt="log"
						/>
						<div className="absolute p-10 right-6 group-hover:flex flex-col gap-4 hidden transition-all duration-300 ease-in-out rounded-sm shadow-md bg-white text-gray-900">
							<button className="whitespace-nowrap">
								Log uot
							</button>
							<button className="whitespace-nowrap">
								Log uot
							</button>
							<button
								onClick={() => setIsAuth(false)}
								className="whitespace-nowrap"
							>
								Log uot
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
