import Input from "@/components/inputs/Input";
import LoginOptions from "@/components/login/LoginOptions";
import VerifyEmail from "@/components/VerifyEmail";
import { supabase } from "@/utils/supabaseClient";
import type { AuthError, EmailOtpType } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlurCircle from "@/components/common/BlurCircle";
import { ArrowLeft } from "lucide-react";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authError, setAuthError] = useState<AuthError | null>(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authSuccess, setAuthSuccess] = useState(false);

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

	const signUp = async () => {
		// const { data, error } =

		await supabase.auth.signUp({
			email,
			password,
		});

		setVerifying(true);
	};

	const googleSignIn = () => {
		supabase.auth.signInWithOAuth({
			provider: "google",
		});
	};

	return (
		<>
			<Link to="/">
				<ArrowLeft className="stroke-secondary fixed top-7 left-7 w-8 hover:scale-110 transition-all duration-300" />
			</Link>

			{verifying && <VerifyEmail email={email} />}
			<div className="h-screen w-screen overflow-hidden flex items-center justify-center">
				<div className="flex flex-col items-center justify-center h-screen w-[50%] border-r border-r-gray-500 rounded-2xl">
					<img src="/icon.png" className="w-20 h-20 mb-1" />
					<p className="text-white text-2xl mb-7">Create an Account!</p>
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
								>
									Email
								</Input>
								<Input
									id="password"
									type="password"
									value={password}
									setValue={setPassword}
								>
									Password
								</Input>
								<Input
									id="confpassword"
									type="password"
									value={confPassword}
									setValue={setConfPassword}
								>
									Confirm Password
								</Input>
								<input
									type="submit"
									className="bg-primary text-white rounded-xl w-70 flex py-2.5 flex-col mt-4 cursor-pointer hover:scale-105 transition-all duration-300"
									value="Sign Up"
								></input>
							</form>
							<LoginOptions signIn={googleSignIn} />{" "}
						</>
					)}
					<div className="mt-10 flex items-center justify-center gap-1.5 text-[14px]">
						<p className="text-white">Already have an account?</p>
						<Link className="text-secondary" to="/login">
							Log In
						</Link>
					</div>
				</div>
				<div className="h-screen w-[50%]">
					<div className="relative w-full h-screen flex flex-col items-center justify-center">
						<BlurCircle z="z-10" />
						<BlurCircle z="z-10" left="50px" top="15px" />
						<BlurCircle z="z-10" right="20px" bottom="-6px" />
						<BlurCircle z="z-10" right="60px" top="30px" />
						<BlurCircle z="z-10" left="120px" bottom="45px" />
						<img src="/medusa.png" width="300px" />
						<p className="text-white text-[18px]">
							Welcome to our Python learning project powered by Medusa.
						</p>
						<p className="text-white text-[18px]">
							Learn Python through simple lessons and hands-on practice.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
