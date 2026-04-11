import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Admin from "./pages/Admin";
import Lesson from "./pages/Lesson";


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
	{
		path: "/admin",
		element: <Admin />,
	},
	{
		path: "/lesson/:id",
		element: (
			<ProtectedRoutes>
				<Lesson />
			</ProtectedRoutes>
		),
	},
]);

function App() {
	return (
		<>
			<AuthContextProvider>
				<RouterProvider router={router} />
			</AuthContextProvider>
		</>
	);
}

export default App;
