import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import { supabase } from "@/utils/supabaseClient";
import type { AuthError, Session, User, WeakPassword } from "@supabase/supabase-js";

interface AuthContextInterface {
	session: Session | null;
	signUpUser: (
		email: string,
		password: string,
	) => Promise<
		| {
				success: boolean;
				error: AuthError;
				data?: undefined;
		  }
		| {
				success: boolean;
				data: {
					user: User | null;
					session: Session | null;
				};
				error?: undefined;
		  }
	>;
	signOut: () => Promise<
		| {
				success: boolean;
				error: AuthError;
		  }
		| {
				success: boolean;
				error?: undefined;
		  }
	>;
	signInUser: (
		email: string,
		password: string,
	) => Promise<
		| {
				success: boolean;
				error: AuthError;
				data?: undefined;
		  }
		| {
				success: boolean;
				data: {
					user: User;
					session: Session;
					weakPassword?: WeakPassword;
				};
				error?: undefined;
		  }
	>;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [session, setSession] = useState<Session | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const signUpUser = async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
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
			value={{ session, signUpUser, signOut, signInUser }}
		>
			{loading ? <p className="text-white">Loading</p> : children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
