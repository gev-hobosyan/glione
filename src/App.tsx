import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Admin from "./pages/Admin";
import Lesson from "./pages/Lesson";
import EditLesson from "./components/admin/edit/EditLesson";
import AdminRoutes from "./utils/AdminRoutes";

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
		element: (
			<AdminRoutes>
				<Admin />
			</AdminRoutes>
		),
	},
	{
		path: "/lesson/:id",
		element: (
			<ProtectedRoutes>
				<Lesson />
			</ProtectedRoutes>
		),
	},
	{
		path: "/edit/:id",
		element: (
			<AdminRoutes>
				<EditLesson />
			</AdminRoutes>
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
