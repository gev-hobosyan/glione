import { useState } from "react";
import type { JwtPayload } from "@supabase/supabase-js";
import NavbarMain from "@/components/NavbarMain";
import CodeEditor from "@/components/CodeEditor";
import { UserAuth } from "@/context/AuthContext";

const Home = () => {
	const [claims, setClaims] = useState<JwtPayload | undefined>(undefined);

	// const supabase = useContext(SupabaseContext);

	// useEffect(() => {
	// 	supabase.auth.getClaims().then(({ data }) => {
	// 		setClaims(data?.claims);
	// 	});

	// 	const {
	// 		data: { subscription },
	// 	} = supabase.auth.onAuthStateChange(() => {
	// 		supabase.auth.getClaims().then(({ data }) => {
	// 			setClaims(data?.claims);
	// 		});
	// 	});

	// 	return () => subscription.unsubscribe();
	// }, [supabase]);

	// const logOut = async () => {
	// 	await supabase.auth.signOut();
	// 	setClaims(undefined);
	// };

	const { session, signOut } = UserAuth();

	console.log(session);

	return (
		<>
			<>
				<NavbarMain logOut={signOut} claims={claims} />

				<div className="h-screen w-screen flex items-center justify-center">
					<CodeEditor />
				</div>
			</>
		</>
	);
};

export default Home;
