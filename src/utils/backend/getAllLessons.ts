const getAllLessons = async () => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/lessons/admin/`);
		return await res.json();
	} catch (e) {
		throw new Error(`ERROR!!! ${e}`)
	}
};

export default getAllLessons;
