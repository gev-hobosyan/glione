import { SupabaseContext } from "@/App";
import Input from "@/components/Input";
import LoginOptions from "@/components/LoginOptions";
import type { AuthError } from "@supabase/supabase-js";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
	const supabase = useContext(SupabaseContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");

	const [authError, setAuthError] = useState<AuthError | null>(null);
	const [authSuccess, setAuthSuccess] = useState(false);

	const params = new URLSearchParams(window.location.search);
	const hasTokenHash = params.get("token_hash");

	const [verifying, setVerifying] = useState(!!hasTokenHash);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const token_hash = params.get("token_hash");
		const type = params.get("type");

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
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
		});

		setVerifying(true);

		console.log(data);
		console.log(error);
	};

	const googleSignIn = () => {
		supabase.auth.signInWithOAuth({
			provider: "google",
		});
	};

	return (
		<div className="h-screen w-screen overflow-hidden flex items-center justify-center">
			<div className="flex flex-col items-center justify-center h-screen w-[50%] border-r border-r-gray-500 rounded-2xl">
				<img src="/icon.svg" className="w-20 h-20 mb-1" />
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
			<div className="h-screen w-[50%]"></div>
		</div>
	);
};

export default SignUp;
