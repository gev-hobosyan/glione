import type { Lesson, Step } from "../../types";

const getLessonById = async (id: string) => {
	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/lesson/${id}`);
		const json = await res.json();
		const steps = json.steps.map((step: Step) => {
			return { ...step, status: "ns" };
		});

		return { id: json._id, ...json, steps } as Lesson;
	} catch (e) {
		throw new Error(`ERROR!! ${e}`);
	}
};

export default getLessonById;
