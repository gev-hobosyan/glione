import { useEffect, useMemo, useState } from "react";
import LessonSidebar from "../components/lessons/LessonsSidebar";
import MultipleChoice from "../components/lessons/sections/MultipleChoice";
import { type Lesson as LessonType, type Step } from "@/utils/types";
import getLessonById from "@/utils/backend/getLessonById";
import LoadingSpinner from "../components/common/LoadingSpinner";
import TextSection from "../components/lessons/sections/TextSection";
import CodeEditor from "../components/lessons/CodeEditor";
import { useParams } from "react-router-dom";
import ProgressBar from "@/components/lessons/ProgressBar";

const Lesson = () => {
	const { id } = useParams();

	const [lesson, setLesson] = useState<LessonType>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	console.log(error);

	const [selectedStep, setSelectedStep] = useState<number>(0);

	const [completedSteps, setCompletedSteps] = useState<number>(0);

	const stepsOrder = useMemo(() => {
		if (lesson) {
			return lesson.steps?.map((step) => step._id!);
		}

		return [] as number[];
	}, [lesson]);

	const step = useMemo(() => {
		return lesson?.steps!.find(
			(s) => s._id == stepsOrder![selectedStep],
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
		if (direction == "prev") {
			setSelectedStep((prev) => (prev !== 0 ? prev - 1 : prev));
		} else {
			setSelectedStep((prev) =>
				stepsOrder!.length - 1 !== prev ? prev + 1 : prev,
			);
		}
	};

	const changeStatus = (status: "ns" | "completed" | "wrong", id: number) => {
		setLesson((prev) => {
			if (prev == undefined) return undefined;
			const steps = prev.steps?.map((step) => {
				if (step._id == id) {
					step.status = status;
				}
				return step;
			});
			setCompletedSteps((prev) => prev + 1);

			return { ...prev, steps };
		});
	};

	const progressBar = useMemo(() => {
		return (
			<ProgressBar
				progress={(completedSteps / stepsOrder!.length) * 100}
			></ProgressBar>
		);
	}, [completedSteps, stepsOrder]);

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
						stepsOrder={stepsOrder!}
					/>
					{step != undefined ? (
						<div className="border border-primary/40 bg-black/40 rounded-3xl h-full w-[80%] max-md:w-full relative">
							{progressBar}

							{step.type == "text" ? (
								<TextSection
									step={step}
									changeCurrentStep={changeCurrentStep}
									selectedStep={selectedStep}
									stepCount={stepsOrder!.length}
									changeStatus={changeStatus}
								/>
							) : step.type == "multi" ? (
								<MultipleChoice
									changeStatus={changeStatus}
									step={step}
									changeCurrentStep={changeCurrentStep}
									selectedStep={selectedStep}
									stepCount={stepsOrder!.length}
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
