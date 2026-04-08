import { UserAuth } from "@/context/AuthContext";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
	const session = UserAuth()?.session;

	return <>{session ? <>{children}</> : <Navigate to="/landing" />}</>;
};

export default ProtectedRoutes;
