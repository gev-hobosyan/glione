import LoadingSpinner from "@/components/common/LoadingSpinner";
import getAllLessons from "@/utils/backend/getAllLessons";
import type { Lesson } from "@/utils/types";
import { useEffect, useState } from "react";
import AdminLessonCard from "./AdminLessonCard";
import { CloudAlert, RotateCcw } from "lucide-react";

const AdminLessons = () => {
	const [lessons, setLessons] = useState<Lesson[]>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

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

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		loadData();
	}, []);

	return (
		<>
			{loading ? (
				<div className="border border-primary/40 bg-black/40 rounded-3xl gap-3 p-6 h-[calc(100%-2.5rem)] w-[calc(100%-7rem)] max-md:w-[calc(100%-2rem)] max-md:h-[calc(100%-7rem)] max-md:mb-25 max-md:mt-3 flex text-white flex-col items-center justify-center">
					<LoadingSpinner />
				</div>
			) : error ? (
				<div className="border border-primary/40 bg-black/40 rounded-3xl gap-3 p-6 h-[calc(100%-2.5rem)] w-[calc(100%-7rem)] max-md:w-[calc(100%-2rem)] max-md:h-[calc(100%-7rem)] max-md:mb-25 max-md:mt-3 flex text-white flex-col items-center justify-center">
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
				<div className="border border-primary/40 bg-black/40 rounded-3xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6 max-md:p-0 max-md:py-6 content-start overflow-scroll h-[calc(100%-2.5rem)] w-[calc(100%-7rem)] max-md:overflow-y-scroll max-md:w-[calc(100%-2rem)]">
					{lessons &&
						lessons.map((lesson) => {
							return (
								<AdminLessonCard
									id={lesson._id!}
									name={lesson.title}
									description={lesson.description}
									progress={0}
									authors={lesson.authors}
									tags={lesson.tags}
									reload={loadData}
									published={lesson.published}
								></AdminLessonCard>
							);
						})}
				</div>
			)}
		</>
	);
};

export default AdminLessons;
