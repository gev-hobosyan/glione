import { ArrowLeft } from "lucide-react";
import Input from "@/components/inputs/Input";
import LoginOptions from "@/components/login/LoginOptions";
import { Link } from "react-router-dom";
import { useState } from "react";
import BlurCircle from "@/components/common/BlurCircle";
import { t } from "i18next";
import { UserAuth } from "@/context/AuthContext";

/**
 * SignIn page allows users to log in using email/password or Google authentication.
 * SignIn component handles user authentication. It allows users to sign in using email/password or Google authentication.
 */
const SignIn = () => {
	// These keep what the user types in the email and password inputs.
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	// The function used to sign in a user using email and password.
	const signInUser = UserAuth()?.signInUser;

	// Calls signInUser with the current email and password to sign the user in, only if signInUser is defined.
	const signIn = async () => {
		if (signInUser !== undefined) {
			const res = await signInUser(email, password);
			if (res.success === false) {
				let _emailError = "";
				let _passwordError = "";
				if (res.error?.code == "email_address_invalid") {
					_emailError = "Invalid Email Address";
				} else if (res.error?.code == "email_exists") {
					_emailError = "This Email Already In Use";
				} else if (res.error?.code == "email_not_confirmed") {
					_emailError = "Email Address Is Not Confirmed";
				} else if (res.error?.code == "weak_password") {
					_passwordError = "Weak Password";
				} else if (res.error?.code == "same_password") {
					_passwordError = "This Password Already Used";
				} else if (res.error?.code == "invalid_credentials") {
					_emailError = "Invalid Email";
					_passwordError = "Invalid Password";
				} else {
					_emailError = "Unknown Error";
					_passwordError = "Unknown Error";
				}
				setEmailError(_emailError);
				setPasswordError(_passwordError);
			}
		}
	};

	// Gets the googleSignIn function from authentication for Google login.
	const googleSignIn = UserAuth()?.googleSignIn;

	return (
		<div className="h-screen w-screen overflow-hidden flex items-center justify-center">
			<Link to="/">
				<ArrowLeft className="stroke-secondary fixed top-7 left-7 w-8 hover:scale-110 transition-all duration-300" />
			</Link>

			<div className="flex flex-col items-center justify-center h-screen w-[50%] max-md:w-full md:border-r md:border-r-gray-500 rounded-2xl">
				<img src="/icon.png" className="w-20 h-20 mb-1" />
				<p className="text-white text-2xl mb-7">{t("SignInWelcome")}</p>
				<form className="flex flex-col gap-3" action={() => signIn()}>
					<Input
						id="email"
						type="email"
						value={email}
						setValue={setEmail}
						width="w-70"
						error={emailError}
					>
						{t("SignInEmail")}
					</Input>
					<Input
						id="password"
						type="password"
						value={password}
						setValue={setPassword}
						width="w-70"
						error={passwordError}
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
			<div className="h-screen w-[50%] relative max-md:hidden">
				<div className="relative w-full h-screen flex flex-col items-center justify-center">
					<BlurCircle z="z-10" />
					<BlurCircle z="z-10" left="50px" top="15px" />
					<BlurCircle z="z-10" right="20px" bottom="-6px" />
					<BlurCircle z="z-10" right="60px" top="30px" />
					<BlurCircle z="z-10" left="120px" bottom="45px" />
					<img src="/medusa.png" width="300px" />
					<p className="text-white text-[18px] text-center">
						{t("SignInRightPageText")}
					</p>
					<p className="text-white text-[18px] text-center">
						{t("SignInRightPageText1")}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
