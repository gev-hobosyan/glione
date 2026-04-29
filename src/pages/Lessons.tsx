import LessonCard from "@/components/lessons/LessonCard";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import getAllLessons from "@/utils/backend/getAllLessons";
import type { Lesson } from "@/utils/types";
import { useEffect, useState } from "react";

const Lessons = () => {
	// Holds fetched lessons, loading state during API call, and any error encountered
	const [lessons, setLessons] = useState<Lesson[]>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	// Fetches lessons on mount, updating loading, data, and error states accordingly
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
				<div className="h-[calc(100%-2.5rem)] w-[calc(100%-7rem)] flex items-center justify-center border border-primary/40 bg-black/40 rounded-3xl ml-5">
					<LoadingSpinner />
				</div>
			) : error ? (
				<p className="text-white">Error</p>
			) : (
				<div className="border border-primary/40 bg-black/40 rounded-3xl grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 content-start ml-5 overflow-scroll h-[calc(100%-2.5rem)] w-[calc(100%-7rem)]">
					{lessons &&
						lessons.map((lesson) => {
							return (
								<LessonCard
									id={lesson._id!}
									name={lesson.title}
									description={lesson.description}
									progress={0}
									authors={lesson.authors}
									tags={lesson.tags}
								></LessonCard>
							);
						})}
				</div>
			)}
		</>
	);
};

export default Lessons;
