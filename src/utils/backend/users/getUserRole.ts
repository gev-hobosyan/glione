const getUserRole = async (id: string) => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/user/role/${id}`);

		return await res.json();
	} catch (e) {
		throw new Error(`${e}`);
	}
};

export default getUserRole;
