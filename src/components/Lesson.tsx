import LessonSidebar from "./LessonsSidebar";
import MultipleChoice from "./MultipleChoice";

const Lesson = () => {
	return (
		<div className="w-full h-full  flex items-center gap-5">
			<LessonSidebar />
			<div className="border border-primary/40 bg-black/40 rounded-3xl h-full w-full">
				<MultipleChoice />
			</div>
		</div>
	);
};

export default Lesson;
