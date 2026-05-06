import type { Lesson } from "../../types";

const updateLesson = async (lesson: Lesson) => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/lesson/${lesson._id}`, {
			method: "PUT",
			body: JSON.stringify(lesson),
		});

		return res;
	} catch (e) {
		console.log(e);
		throw new Error(`ERROR!! ${e}`);
	}
};

export default updateLesson;
