const updateUserXp = async (id: string, xp: number) => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/user/xp/${id}`, {
			method: "PUT",
			body: JSON.stringify({ xp }),
		});

		console.log(id, xp, res);

		return await res.json();
	} catch (e) {
		throw new Error(`${e}`);
	}
};

export default updateUserXp;
