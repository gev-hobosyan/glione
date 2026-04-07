import type { Lesson } from "../types";

const getLessonById = async (id: string) => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/lesson/${id}`);
		const json = await res.json();

		return { id: json._id, ...json } as Lesson;
	} catch (e) {
		throw new Error(`ERROR!! ${e}`);
	}
};

export default getLessonById;
