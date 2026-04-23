import { ArrowLeft } from "lucide-react";
import Input from "@/components/inputs/Input";
import LoginOptions from "@/components/login/LoginOptions";
import { Link } from "react-router-dom";
import { useState } from "react";
import BlurCircle from "@/components/common/BlurCircle";
import { t } from "i18next";
import { UserAuth } from "@/context/AuthContext";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signInUser = UserAuth()?.signInUser;

	const signIn = () => {
		if (signInUser !== undefined) {
			signInUser(email, password);
		}
	};

	const googleSignIn = UserAuth()?.googleSignIn;

	return (
		<div className="h-screen w-screen overflow-hidden flex items-center justify-center">
			<Link to="/">
				<ArrowLeft className="stroke-secondary fixed top-7 left-7 w-8 hover:scale-110 transition-all duration-300" />
			</Link>

			<div className="flex flex-col items-center justify-center h-screen w-[50%] border-r border-r-gray-500 rounded-2xl">
				<img src="/icon.png" className="w-20 h-20 mb-1" />
				<p className="text-white text-2xl mb-7">{t("SignInWelcome")}</p>
				<form className="flex flex-col gap-3" action={() => signIn()}>
					<Input
						id="email"
						type="email"
						value={email}
						setValue={setEmail}
						width="w-70"
					>
						{t("SignInEmail")}
					</Input>
					<Input
						id="password"
						type="password"
						value={password}
						setValue={setPassword}
						width="w-70"
					>
						{t("SignInPassword")}
					</Input>
					<input
						type="submit"
						className="bg-primary text-white rounded-xl w-70 flex py-2.5 flex-col mt-4 cursor-pointer hover:scale-105 transition-all duration-300"
						value={t("SignInButton")}
					></input>
				</form>
				<LoginOptions signIn={googleSignIn!} />
				<div className="mt-10 flex items-center justify-center gap-1.5 text-[14px]">
					<p className="text-white">{t("SignInText")}</p>
					<Link className="text-secondary" to="/signup">
						{t("SignInSignUp")}
					</Link>
				</div>
			</div>
			<div className="h-screen w-[50%] relative">
				<div className="relative w-full h-screen flex flex-col items-center justify-center">
					<BlurCircle z="z-10" />
					<BlurCircle z="z-10" left="50px" top="15px" />
					<BlurCircle z="z-10" right="20px" bottom="-6px" />
					<BlurCircle z="z-10" right="60px" top="30px" />
					<BlurCircle z="z-10" left="120px" bottom="45px" />
					<img src="/medusa.png" width="300px" />
					<p className="text-white text-[18px]">
						{t("SignInRightPageText")}
					</p>
					<p className="text-white text-[18px]">
						{t("SignInRightPageText1")}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
