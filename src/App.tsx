import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<ProtectedRoutes>
				<Home />
			</ProtectedRoutes>
		),
	},
	{ path: "/landing", element: <Landing /> },
	{ path: "/login", element: <SignIn /> },
	{ path: "/signup", element: <SignUp /> },
]);

function App() {
	return (
		<>
			{/*<SupabaseContext.Provider value={supabase}>
				<RouterProvider router={router} />
			</SupabaseContext.Provider>*/}
			<AuthContextProvider>
				<RouterProvider router={router} />
			</AuthContextProvider>
		</>
	);
}

export default App;
