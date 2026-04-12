import { useEffect, useMemo, useState } from "react";
import LessonSidebar from "../components/LessonsSidebar";
import MultipleChoice from "../components/MultipleChoice";
import { type Lesson as LessonType, type Step } from "@/utils/types";
import getLessonById from "@/utils/backend/getLessonById";
import LoadingSpinner from "../components/LoadingSpinner";
import TextSection from "../components/TextSection";
import CodeEditor from "../components/CodeEditor";
import { useParams } from "react-router-dom";

const Lesson = () => {
	const { id } = useParams();

	const [lesson, setLesson] = useState<LessonType>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	const [selectedStep, setSelectedStep] = useState<number>(0);


	const stepsOrder: number[] = useMemo(() => {
		if (lesson) {
			return lesson.steps?.map((step) => step._id!);
		}

		return [] as number[];
	}, [lesson]);

	const step = useMemo(() => {
		return lesson?.steps!.find(
			(s) => s._id == stepsOrder[selectedStep],
		) as Step;
	}, [lesson, selectedStep, stepsOrder]);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				setLesson(await getLessonById(id!));
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};

		getData();
	}, [id]);


	const changeCurrentStep = (direction: "next" | "prev") => {
		if(direction == "prev") {
			setSelectedStep(prev => prev !== 0 ? prev - 1 : prev)
		} else {
			setSelectedStep(prev => stepsOrder.length - 1 !== prev ? prev + 1 : prev)
		}
	}

	const changeStatus = (status: "ns" | "completed" | "wrong", id: number) => {
		setLesson(prev => {
			if(prev == undefined) return undefined
			const steps = prev.steps?.map(step => {
				if(step._id == id) {
					step.status = status
				} return step;
			})
			return {...prev, steps};
		})
	}

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
						stepsOrder={stepsOrder}
					/>
					{step != undefined ? (
						<div className="border border-primary/40 bg-black/40 rounded-3xl h-full w-[80%]">
							{step.type == "text" ? (
								<TextSection step={step} 
								changeCurrentStep={changeCurrentStep}
								selectedStep={selectedStep}
								stepCount={stepsOrder.length}
								changeStatus={changeStatus}
								/>
							) : step.type == "multi" ? (
								<MultipleChoice step={step} 
								changeCurrentStep={changeCurrentStep}
								selectedStep={selectedStep}
								stepCount={stepsOrder.length}
								/>
							) : step.type == "code" ? (
								<CodeEditor></CodeEditor>
							) : (
								<div></div>
							)}
						</div>
					) : (
						<div></div>
					)}
				</div>
			)}
		</>
	);
};

export default Lesson;
