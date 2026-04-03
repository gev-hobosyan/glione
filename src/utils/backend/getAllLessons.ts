const getAllLessons = async () => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/lessons/display`);
		return await res.json();
	} catch (e) {
		console.log(e);
		return "ERROR!!";
	}
};

export default getAllLessons;
