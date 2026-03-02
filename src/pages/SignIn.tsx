import React from "react";

const SignIn = () => {
	return (
		<div className="h-screen w-screen overflow-hidden flex items-center justify-center">
			<div className="flex flex-col items-center justify-center h-screen w-[50%] border-r border-r-gray-500 rounded-2xl">
                <img src="/icon.svg" className="w-20 h-20"/>
                <p className="text-white text-2xl mb-20">Welcome Back!</p>
                <form>
                <p className="text-white">Email Address or Phone Number</p>
                <input type="text" className="border-white border rounded-xl w-70 py-2.5 px-5 mt-2 text-white" placeholder="Your Email"></input>
                <p className="text-white mt-5">Password</p>
                <input type="password" className="border-white border rounded-xl w-70 py-2.5 px-5 mt-2 text-white" placeholder="Your Password"></input>
                <input type="submit" className="bg-white rounded-xl w-70 py-2.5 px-5 text-gray-800 flex flex-col mt-10" placeholder="Submit"></input>
                </form>
            </div>
			<div className="h-screen w-[50%]"></div>
		</div>
	);
};

export default SignIn;
