import React from "react";

export default function SideBar() {
	return (
		<div className="sticky h-screen bg-teal-800 w-auto border-t border-black lg:p-3 ">
			<div className="w-full ">
				<div className="border-b flex flex-col gap-1 w-full border-black  ">
					<h1 className="font-medium text-xl mb-2">Main</h1>
					<div className=" text-lg font-medium flex flex-col cursor-pointer px-4">
						<span className="text-gray-900 ">Hoem</span>
						<span className="text-gray-900 ">Profile</span>
					</div>
				</div>
			</div>
			<div className="w-full py-3">
				<div className="border-b flex flex-col gap-1 w-full border-black py-3  ">
					<h1 className="font-medium text-xl mb-2">List</h1>

					<div className=" text-lg font-medium flex flex-col cursor-pointer px-4">
						<span className="text-gray-900 ">Uers</span>
						<span className="text-gray-900 ">Profile</span>
						<span className="text-gray-900 ">Products</span>
						<span className="text-gray-900 ">Oders</span>
						<span className="text-gray-900 ">Posts</span>
					</div>
				</div>
			</div>
			<div className="w-full py-3">
				<div className="border-b flex flex-col gap-1 w-full border-black py-3  ">
					<h1 className="font-medium text-xl mb-2">General</h1>

					<div className=" text-lg font-medium flex flex-col cursor-pointer px-4">
						<span className="text-gray-900 ">Uers</span>
						<span className="text-gray-900 ">Profile</span>
						<span className="text-gray-900 ">Products</span>
						<span className="text-gray-900 ">Oders</span>
						<span className="text-gray-900 ">Posts</span>
					</div>
				</div>
			</div>
		</div>
	);
}
