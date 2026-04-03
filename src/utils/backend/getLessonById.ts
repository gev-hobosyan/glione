import type { Lesson, Step } from "../types";

const getLessonById = async (id: string) => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/lesson/${id}`);
		const json = await res.json();

		return { id: json._id, ...json } as Lesson;
		return id;
	} catch (e) {
		console.log(e);
		return "ERROR!!";
	}
};

export default getLessonById;
