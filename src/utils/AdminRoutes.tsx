import { UserAuth } from "@/context/AuthContext";
import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import getUserRole from "./backend/users/getUserRole";

const AdminRoutes = ({ children }: { children: ReactNode }) => {
	const session = UserAuth()?.session;

	const [loading, setLoading] = useState<boolean>(true);
	const [userRole, setUserRole] = useState<string | undefined>();
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const loadData = async () => {
			if (session) {
				setLoading(true);

				try {
					const res = await getUserRole(session["user"]["id"]);

					console.log(res);

					setUserRole(res["role"]);
				} catch (e) {
					console.log(e);

					setError(true);
				} finally {
					setLoading(false);
				}
			}
		};

		loadData();
	}, [session]);

	return (
		<>
			{loading ? (
				<>Loading</>
			) : error ? (
				<>Error</>
			) : session && userRole === "admin" ? (
				<>{children}</>
			) : (
				<Navigate to="/" />
			)}
		</>
	);
};

export default AdminRoutes;
