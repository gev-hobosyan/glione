import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import { supabase } from "@/utils/supabaseClient";
import type { Session } from "@supabase/supabase-js";
import type { AuthContextInterface } from "@/utils/types";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const url =
		import.meta.env.VITE_PUBLIC_SITE_URL ??
		import.meta.env.VITE_PUBLIC_VERCEL_URL ??
		"https://glione.vercel.app/";

	const test = proccess.env.dasd;

	const [session, setSession] = useState<Session | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const signUpUser = async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: url,
			},
		});

		if (error) {
			console.error(`Sign up error: ${error}`);
			return { success: false, error };
		}

		return { success: true, data };
	};

	const signOut = async () => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			return { success: false, error };
		}

		return { success: true };
	};

	const signInUser = async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			console.error(`Sign up error: ${error}`);
			return { success: false, error };
		}

		return { success: true, data };
	};

	console.log(url);

	const googleSignIn = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: url,
			},
		});

		if (error) {
			console.error(`Sign in error: ${error}`);
			return { success: false, error };
		}

		return { success: true, data };
	};

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			setLoading(false);
		});

		return () => subscription.unsubscribe();
	}, []);

	return (
		<AuthContext.Provider
			value={{ session, signUpUser, signOut, signInUser, googleSignIn }}
		>
			{loading ? (
				<div className="w-[calc(100vw-20px)] h-[calc(100vh-20px)] mx-2.5 my-1 rounded-3xl flex items-center justify-center bg-black/40 border border-primary/40">
					<LoadingSpinner></LoadingSpinner>
				</div>
			) : (
				children
			)}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
