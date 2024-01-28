import React from "react";

function Login({ setisAuth }) {
	return (
		<div className="w-full h-screen flex items-center justify-center ">
			<div className=" h-24 w-2/5 bg-gray-400 backdrop-blur-lg rounded-md flex ">
				<button
					className="m-auto bg-gradient-to-t from-yellow-400 to-yellow-600 px-8 py-2 rounded-xl "
					onClick={() => setisAuth(true)}
				>
					Logint
				</button>
			</div>
		</div>
	);
}

export default Login;
