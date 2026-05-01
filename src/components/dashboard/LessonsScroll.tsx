import getLessonsByCount from "@/utils/backend/getLessonsByCount";
import type { Lesson } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import LessonCard from "../lessons/LessonCard";

const LessonsScroll = () => {
	// Stores lessons data, loading state, and any fetch error.
	const [lessons, setLessons] = useState<Lesson[]>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	// On mount, it loads 10 lessons, saves them to state, handles errors, and updates loading status.
	useEffect(() => {
		const loadData = async () => {
			setLoading(true);
			try {
				setLessons(await getLessonsByCount(10));
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, []);

	const scrollRef = useRef<HTMLDivElement>(null);

	return (
		<>
			{loading ? (
				<div className="w-full h-full flex items-center justify-center bg-black/40 rounded-3xl relative">
					<LoadingSpinner />
				</div>
			) : error ? (
				<p className="text-white">Error</p>
			) : (
				<div
					className="w-full h-full flex items-center gap-2 overflow-x-scroll px-3 overflow-y-visible relative"
					ref={scrollRef}
				>
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

export default LessonsScroll;
