import type { Lesson } from "../types";

const createLesson = async () => {
	const lesson: Lesson = {
		title: "Levon",
		published: true,
		tags: [
			{
				name: "cs",
			},
			{
				name: "python",
			},
		],
		authors: [
			{
				name: "Levon",
			},
			{
				name: "Nare",
			},
		],
		section: "Python",
		steps: [
			{
				title: "Nare",
				type: "text",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				choices: [],
				rightAnswer: "",
				predefinedCode: "",
			},
			{
				title: "Natali",
				type: "multi",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				choices: [
					{
						text: "ES AYSTEX CAV EM TESNUM?",
						isRight: false,
					},
					{
						text: "INCHNA SIRUNNN",
						isRight: true,
					},
					{
						text: "Janejan Janejan",
						isRight: false,
					},
				],
				rightAnswer: "",
				predefinedCode: "",
			},
			{
				title: "Gevorg",
				type: "text",
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
				choices: [],
				rightAnswer: "",
				predefinedCode: "",
			},
		],
	};

	const API_URL = import.meta.env.VITE_API_URL || "";

	try {
		const res = await fetch(`${API_URL}/lesson`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(lesson),
		});

		console.log(await res.json());
	} catch (e) {
		throw new Error(`${e}`);
	}
};

export default createLesson;
