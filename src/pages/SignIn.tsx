import { Check, CheckCircle, CheckCircle2 } from "lucide-react";
import React from "react";

const SignIn = () => {
	return (
		<div className="h-screen w-screen overflow-hidden flex items-center justify-center">
			<div className="flex flex-col items-center justify-center h-screen w-[50%] border-r border-r-gray-500 rounded-2xl">
				<img src="/icon.svg" className="w-20 h-20" />
				<p className="text-white text-2xl mb-20">Welcome Back!</p>
				<form>
					<p className="text-white">Email</p>
					<input
						type="text"
						className="border-white/50 focus:border-secondary/50 focus:ring-0 ring-0 focus:outline-none focus:shadow-input border rounded-xl w-70 py-2.5 px-5 mt-2 text-white"
						placeholder="Your Email"
					></input>
					<p className="text-white mt-5">Password</p>
					<input
						type="password"
						className="border-white/50 focus:border-secondary/50 focus:ring-0 ring-0 focus:outline-none focus:shadow-input border rounded-xl w-70 py-2.5 px-5 mt-2 text-white"
						placeholder="Your Password"
					></input>
					<input
						type="submit"
						className="bg-primary text-white rounded-xl w-70 flex py-2.5 flex-col mt-10"
						value="Log in"
					></input>
				</form>
			</div>
			<div className="h-screen w-[50%]">
				<p className="text-white flex items-center justify-center mt-60 mr-80 text-[24px]">Your App, Enterprise Ready.</p>
				<div className="flex ml-28 mt-5">
					<Check  className="h-4 w-4 bg-primary rounded-xs stroke-white pl-0.5"/>
					<p className="text-[16px] text-gray-600 ml-3">Ship a complete B2B auth platform in minutes with Glione.</p>
				</div>
				<div className="flex ml-28 mt-5">
					<Check  className="h-4 w-4 bg-primary rounded-xs stroke-white pl-0.5"/>
					<p className="text-[16px] text-gray-600 ml-3">Unlock self-serve SSO and Directory Sync with Admin Portal.</p>
				</div>
				<div className="flex ml-28 mt-5">
					<Check  className="h-4 w-4 bg-primary rounded-xs stroke-white pl-0.5"/>
					<p className="text-[16px] text-gray-600 ml-3">No credit card required.</p>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
