import LoadingSpinner from "@/components/common/LoadingSpinner";
import getAllLessons from "@/utils/backend/getAllLessons";
import type { Lesson } from "@/utils/types";
import { useEffect, useState } from "react";
import AdminLessonCard from "./AdminLessonCard";

const AdminLessons = () => {
	const [lessons, setLessons] = useState<Lesson[]>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		loadData();
	}, []);
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

	return (
		<>
			{loading ? (
				<div className="w-full h-full flex items-center justify-center border border-primary/40 bg-black/40 rounded-3xl ml-5">
					<LoadingSpinner />
				</div>
			) : error ? (
				<p className="text-white">Error</p>
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
								></AdminLessonCard>
							);
						})}
				</div>
			)}
		</>
	);
};

export default AdminLessons;
