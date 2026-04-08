import LessonCard from "@/components/LessonCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import getAllLessons from "@/utils/backend/getAllLessons";
import type { Lesson } from "@/utils/types";
import { useEffect, useState } from "react";

const Lessons = () => {
	const [lessons, setLessons] = useState<Lesson[]>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		const loadData = async () => {
			setLoading(true);
			try {
				setLessons(await getAllLessons());
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, []);

	return (
		<>
			{loading ? (
				<div className="w-full h-full flex items-center justify-center border border-primary/40 bg-black/40 rounded-3xl ml-5">
					<LoadingSpinner />
				</div>
			) : error ? (
				<p className="text-white">Error</p>
			) : (
				<div className="w-full border border-primary/40 bg-black/40 rounded-3xl grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 content-start ml-5 overflow-scroll">
					{lessons!.map((lesson) => (
						<LessonCard
							name={lesson.title}
							description={lesson.title}
							progress={0}
							authors={lesson.authors}
							tags={lesson.tags}
						></LessonCard>
					))}
				</div>
			)}
		</>
	);
};

export default Lessons;
