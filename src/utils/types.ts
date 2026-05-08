import type {
	AuthError,
	Provider,
	Session,
	SupabaseUser,
	WeakPassword,
} from "@supabase/supabase-js";
import type { LucideProps } from "lucide-react";

export type Author = {
	_id: string;
	id?: number;
	name: string;
};

export type Tag = {
	id?: number;
	_id?: number;
	name: string;
};

export type Step = {
	id: number;
	_id?: number;
	title: string;
	type: "text" | "multi" | "code";
	content: string;
	predefinedCode?: string;
	rightAnswer?: string;
	choices?: Choice[];
	icon?: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	status?: "ns" | "completed" | "wrong";
	map?: string;
};

export type Choice = {
	_id?: string;
	text: string;
	isRight: boolean;
	id?: number;
};

export type Lesson = {
	_id?: string;
	title: string;
	description: string;
	published: boolean;
	tags: Tag[];
	authors: Author[];
	section: string;
	steps?: Step[];
};

export interface AuthContextInterface {
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
					user: SupabaseUser | null;
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
					user: SupabaseUser;
					session: Session;
					weakPassword?: WeakPassword;
				};
				error?: undefined;
		  }
	>;
	googleSignIn: () => Promise<
		| {
				success: boolean;
				error: AuthError;
				data?: undefined;
		  }
		| {
				success: boolean;
				data: {
					provider: Provider;
					url: string;
				};
				error?: undefined;
		  }
	>;
}

export interface User {
	userId: string;
	xp: number;
	role: string;
	energy: number;
	streak: number;
	lessons: LessonProgress[];
}

export interface LessonProgress {
	lessonId: string;
	progress: number;
	steps_completed: number;
	total_steps: number;
}
