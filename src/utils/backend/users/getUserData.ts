import type { User } from "@/utils/types";

const getUserData = async (id: string) => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		if (id == "") {
			throw new Error("Not Valid Id");
		}

		const res = await fetch(`${API_URL}/user/${id}`);

		return (await res.json()) as User;
	} catch (e) {
		throw new Error(`${e}`);
	}
};

export default getUserData;
