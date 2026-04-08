import { useEffect, useMemo, useState } from "react";
import LessonSidebar from "./LessonsSidebar";
import MultipleChoice from "./MultipleChoice";
import { type Lesson as LessonType, type Step } from "@/utils/types";
import getLessonById from "@/utils/backend/getLessonById";
import LoadingSpinner from "./LoadingSpinner";
import TextSection from "./TextSection";
import CodeEditor from "./CodeEditor";
import { useParams } from "react-router-dom";


const Lesson = () => {
	const { id } = useParams();

	const [lesson, setLesson] = useState<LessonType>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	const stepTypes = {
		text: TextSection,
		multi: MultipleChoice,
		code: CodeEditor,
	};

	const [selectedStep, setSelectedStep] = useState<number | null>(null);

	const step = useMemo(() => {
		return lesson?.steps!.find((s) => s._id == selectedStep) as Step;
	}, [selectedStep, lesson]);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				setLesson(await getLessonById("69cbcecabea0fe09ab6a66f9"));
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};

		getData();
	}, []);

	return (
		<>
			{loading ? (
				<div className="w-[calc(100vw-20px)] h-[calc(100vh-20px)] mx-2.5 my-1 rounded-3xl flex items-center justify-center bg-black/40 border border-primary/40">
					<LoadingSpinner></LoadingSpinner>
				</div>
			) : (
				<div className="w-screen h-screen flex items-center gap-5 p-2">
					<LessonSidebar
						lesson={lesson!}
						selectedStep={selectedStep}
						setSelectedStep={setSelectedStep}
					/>
					{step != undefined ? (
						<div className="border border-primary/40 bg-black/40 rounded-3xl h-full w-full">
							{step.type == "text" ? (
								<TextSection step={step} />
							) : step.type == "multi" ? (
								<MultipleChoice step={step} />
							) : step.type == "code" ? (
								<CodeEditor></CodeEditor>
							) : (
								<div></div>
							)}
						</div>
					) : (
						<div></div>
					)}

					{/*{/*<div className="border border-primary/40 bg-black/40 rounded-3xl h-full w-full">
						<MultipleChoice />
					</div>*/}
				</div>
				
			)}
		</>
	);
};

export default Lesson;
