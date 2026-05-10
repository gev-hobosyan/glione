import Input from "@/components/inputs/Input";
import LoginOptions from "@/components/login/LoginOptions";
import VerifyEmail from "@/components/login/VerifyEmail";
import { supabase } from "@/utils/supabaseClient";
import type { AuthError, EmailOtpType } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlurCircle from "@/components/common/BlurCircle";
import { ArrowLeft } from "lucide-react";
import { t } from "i18next";
import { UserAuth } from "@/context/AuthContext";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");

	const [authError, setAuthError] = useState<AuthError | null>(null);
	const [authSuccess, setAuthSuccess] = useState(false);

	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confPasswordError, setConfPasswordError] = useState("");

	console.log(authError, authSuccess);

	const params = new URLSearchParams(window.location.search);
	const hasTokenHash = params.get("token_hash");

	const [verifying, setVerifying] = useState(!!hasTokenHash);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const token_hash = params.get("token_hash");
		const type = params.get("type") as EmailOtpType;

		if (token_hash) {
			supabase.auth
				.verifyOtp({
					token_hash,
					type: type,
				})
				.then(({ error }) => {
					if (error) {
						setAuthError(error);
					} else {
						setAuthSuccess(true);

						window.history.replaceState({}, document.title, "/");
					}

					setVerifying(false);
				});
		}
	});

	const signUpFunction = UserAuth()?.signUpUser;

	const signUp = async () => {
		if (signUpFunction !== undefined) {
			if (password === confPassword) {
				const res = await signUpFunction(email, password);

				if (res.success === false) {
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
						setConfPasswordError(_passwordError);
					}
				} else {
					setVerifying(true);
				}
			} else {
				setPasswordError(" ");
				setConfPasswordError("Passwords must match");
			}
		}
	};

	const googleSignIn = UserAuth()?.googleSignIn;

	return (
		<>
			<Link to="/">
				<ArrowLeft className="stroke-secondary fixed top-7 left-7 w-8 hover:scale-110 transition-all duration-300" />
			</Link>

			{/*{verifying && <VerifyEmail email={email} />}*/}
			<div className="h-screen w-screen overflow-hidden flex items-center justify-center">
				<div className="flex flex-col items-center justify-center h-screen w-[50%] max-md:w-full md:border-r md:border-r-gray-500 rounded-2xl">
					<img src="/icon.png" className="w-20 h-20 mb-1" />
					<p className="text-white text-2xl mb-7">{t("SignUpWelcome")}</p>
					{verifying ? (
						<div className="text-2xl text-white">
							<p>Waiting for email verification...</p>
							<p>Please check your inbox</p>
						</div>
					) : (
						<>
							<form className="flex flex-col gap-3" action={signUp}>
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
								<Input
									id="confpassword"
									type="password"
									value={confPassword}
									setValue={setConfPassword}
									width="w-70"
									error={confPasswordError}
								>
									{t("SignUpConfirmPassword")}
								</Input>
								<input
									type="submit"
									className="bg-primary text-white rounded-xl w-70 flex py-2.5 flex-col mt-4 cursor-pointer hover:scale-105 transition-all duration-300"
									value={t("SignUpButton")}
								></input>
							</form>
							<LoginOptions signIn={googleSignIn!} />{" "}
						</>
					)}
					<div className="mt-10 flex items-center justify-center gap-1.5 text-[14px]">
						<p className="text-white">{t("SignUpText")}</p>
						<Link className="text-secondary" to="/login">
							{t("SignUpLogIn")}
						</Link>
					</div>
				</div>
				<div className="h-screen w-[50%] max-md:hidden">
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
		</>
	);
};

export default SignUp;
