const updateUserEnergy = async (id: string, energy: number) => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/user/energy/${id}`, {
			method: "PUT",
			body: JSON.stringify({ energy }),
		});

		return await res.json();
	} catch (e) {
		throw new Error(`${e}`);
	}
};

export default updateUserEnergy;
