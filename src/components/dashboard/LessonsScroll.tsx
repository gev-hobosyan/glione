import getLessonsByCount from "@/utils/backend/lessons/getLessonsByCount";
import type { Lesson } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import LessonCard from "../lessons/LessonCard";
import { CloudAlert, RotateCcw } from "lucide-react";

const LessonsScroll = () => {
	// Stores lessons data, loading state, and any fetch error.
	const [lessons, setLessons] = useState<Lesson[]>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	// On mount, it loads 10 lessons, saves them to state, handles errors, and updates loading status.

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

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
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
				<div className="w-full h-full bg-black/40 rounded-3xl border border-primary flex items-center justify-center text-white flex-col gap-3">
					<div className="flex gap-3 items-center justify-center">
						<CloudAlert className="stroke-red-700 w-7 h-7"></CloudAlert>
						<p className="text-xl">Error</p>
					</div>
					<p>Unexpected error accured while fetching the lessons</p>
					<div
						className="flex gap-3 group cursor-pointer"
						onClick={loadData}
					>
						<p>Please try again</p>
						<RotateCcw className="w-5 group-hover:-rotate-360 transition-all duration-700"></RotateCcw>
					</div>
				</div>
			) : (
				<div
					className="w-full h-full flex items-center gap-2 overflow-x-scroll px-3 overflow-y-visible relative"
					ref={scrollRef}
				>
					{lessons &&
						lessons.map((lesson, index) => {
							return (
								<LessonCard
								key={index}
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
