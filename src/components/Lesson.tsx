import { useEffect, useState } from "react";
import LessonSidebar from "./LessonsSidebar";
import MultipleChoice from "./MultipleChoice";
import { type Lesson as LessonType } from "@/utils/types";
import getLessonById from "@/utils/backend/getLessonById";
import LoadingSpinner from "./LoadingSpinner";

const Lesson = () => {
	const [lesson, setLesson] = useState<LessonType>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				setLesson(await getLessonById("69cbcecabea0fe09ab6a66f9"));
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	console.log(lesson);

	return (
		<>
			{loading ? (
				<div className="w-[calc(100vw-20px)] h-[calc(100vh-20px)] mx-2.5 my-1 rounded-3xl flex items-center justify-center bg-black/40 border border-primary/40">
					<LoadingSpinner></LoadingSpinner>
				</div>
			) : (
				<div className="w-screen h-screen flex items-center gap-5 p-2">
					<LessonSidebar lesson={lesson!} />
					<div className="border border-primary/40 bg-black/40 rounded-3xl h-full w-full">
						<MultipleChoice />
					</div>
				</div>
			)}
		</>
	);
};

export default Lesson;
