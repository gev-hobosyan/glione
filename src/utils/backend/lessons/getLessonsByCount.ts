const getLessonsByCount = async (count: number, lang: string) => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/lessons/count/${lang}/${count}`);
		const json = await res.json();
		
		return json;
	} catch (e) {
		throw new Error(`ERROR!! ${e}`);
	}
};

export default getLessonsByCount;
