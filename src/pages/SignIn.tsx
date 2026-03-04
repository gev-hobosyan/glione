import { ArrowLeft, Check, CheckCircle, CheckCircle2 } from "lucide-react";
import Input from "@/components/Input";
import React from "react";
import LoginOptions from "@/components/LoginOptions";
import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<div className="h-screen w-screen overflow-hidden flex items-center justify-center">
			{
				// Not the final version. Might be removed
			}
			<Link to="/">
				<ArrowLeft className="stroke-secondary fixed top-7 left-7 w-8 hover:scale-110 transition-all duration-300" />
			</Link>

			<div className="flex flex-col items-center justify-center h-screen w-[50%] border-r border-r-gray-500 rounded-2xl">
				<img src="/icon.svg" className="w-20 h-20 mb-1" />
				<p className="text-white text-2xl mb-7">Welcome Back!</p>
				<form className="flex flex-col gap-3">
					<Input id="email" type="email">
						Email
					</Input>
					<Input id="password" type="password">
						Password
					</Input>
					<input
						type="submit"
						className="bg-primary text-white rounded-xl w-70 flex py-2.5 flex-col mt-4 cursor-pointer hover:scale-105 transition-all duration-300"
						value="Log in"
					></input>
				</form>
				<LoginOptions />
				<div className="mt-10 flex items-center justify-center gap-1.5 text-[14px]">
					<p className="text-white">Don't have an account?</p>
					<Link className="text-secondary" to="/signup">
						Sign Up
					</Link>
				</div>
			</div>
			<div className="h-screen w-[50%]">
				<p className="text-white flex items-center justify-center mt-60 mr-80 text-[24px]">
					Your App, Enterprise Ready.
				</p>
				<div className="flex ml-28 mt-5">
					<Check className="h-4 w-4 bg-primary rounded-xs stroke-white pl-0.5" />
					<p className="text-[16px] text-gray-600 ml-3">
						Ship a complete B2B auth platform in minutes with Glione.
					</p>
				</div>
				<div className="flex ml-28 mt-5">
					<Check className="h-4 w-4 bg-primary rounded-xs stroke-white pl-0.5" />
					<p className="text-[16px] text-gray-600 ml-3">
						Unlock self-serve SSO and Directory Sync with Admin Portal.
					</p>
				</div>
				<div className="flex ml-28 mt-5">
					<Check className="h-4 w-4 bg-primary rounded-xs stroke-white pl-0.5" />
					<p className="text-[16px] text-gray-600 ml-3">
						No credit card required.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
