import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import Home from "./pages/Home";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
);

// eslint-disable-next-line react-refresh/only-export-components
export const SupabaseContext = createContext<SupabaseClient>(supabase);

function App() {
	return (
		<>
			<SupabaseContext.Provider value={supabase}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
					</Routes>
				</BrowserRouter>
			</SupabaseContext.Provider>
		</>
	);
}

export default App;
