import { SupabaseContext } from "@/App";
import { useContext, useEffect, useState } from "react";
import Landing from "./Landing";
import type { JwtPayload } from "@supabase/supabase-js";
import NavbarMain from "@/components/NavbarMain";
import CodeEditor from "@/components/CodeEditor";

const Home = () => {
	const [claims, setClaims] = useState<JwtPayload | undefined>(undefined);

	const [value, setValue] = useState("");

	const supabase = useContext(SupabaseContext);

	useEffect(() => {
		supabase.auth.getClaims().then(({ data }) => {
			setClaims(data?.claims);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			supabase.auth.getClaims().then(({ data }) => {
				setClaims(data?.claims);
			});
		});

		return () => subscription.unsubscribe();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const logOut = async () => {
		await supabase.auth.signOut();
		setClaims(undefined);
	};

	return (
		<>
			{!claims ? (
				<Landing></Landing>
			) : (
				<>
					<NavbarMain logOut={logOut} claims={claims} />

					<div className="h-screen w-screen flex items-center justify-center">
						<CodeEditor value={value} setValue={setValue} />
					</div>
				</>
			)}
		</>
	);
};

export default Home;
