import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import LessonSidebar from "../components/lessons/LessonsSidebar";
import MultipleChoice from "../components/lessons/sections/MultipleChoice";
import { type Lesson as LessonType, type Step, type User } from "@/utils/types";
import getLessonById from "@/utils/backend/lessons/getLessonById";
import LoadingSpinner from "../components/common/LoadingSpinner";
import TextSection from "../components/lessons/sections/TextSection";
import { useParams } from "react-router-dom";
import ProgressBar from "@/components/lessons/ProgressBar";
import { PhaserGame, type IRefPhaserGame } from "@/game/PhaserGame";
import Complete from "@/components/lessons/sections/Complete";
import BlurCircle from "@/components/common/BlurCircle";
import getUserData from "@/utils/backend/users/getUserData";
import { UserAuth } from "@/context/AuthContext";
import updateUserEnergy from "@/utils/backend/users/updateUserEnergy";
import { Zap } from "lucide-react";

/**
 * The page where the lesson is displayed and can be done step by step.
 */
const Lesson = () => {
	const { id } = useParams();

	//These states are used to fetch the lesson, also display loading animation or errors that occured.
	const [lesson, setLesson] = useState<LessonType>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<unknown>();

	console.log(error);

	const session = UserAuth()?.session;
	const [userData, setUserData] = useState<User>();

	const loadData = useCallback(async () => {
		setLoading(true);

		try {
			setUserData(await getUserData(session?.user.id || ""));
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	}, [session]);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		loadData();
	}, [loadData]);

	//This state is used to store the current selected step.
	const [selectedStep, setSelectedStep] = useState<number>(0);

	//This state is used to store the current completed steps.
	const [completedSteps, setCompletedSteps] = useState<number>(0);

	//This function memoizes and returns an array of step IDs from the lesson, recalculating only when the lesson changes.
	const stepsOrder = useMemo(() => {
		if (lesson) {
			return lesson.steps?.map((step) => step._id!);
		}

		return [] as number[];
	}, [lesson]);

	const completed = useMemo(() => {
		return completedSteps === stepsOrder?.length;
	}, [completedSteps, stepsOrder]);

	//This function memoizes and returns the currently selected step by matching the selected index to its step ID.
	const step = useMemo(() => {
		return lesson?.steps!.find(
			(s) => s._id == stepsOrder![selectedStep],
		) as Step;
	}, [lesson, selectedStep, stepsOrder]);

	//This function is used to fetch the lesson by its ID.
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

	//This function is for navigating through steps.
	const changeCurrentStep = (direction: "next" | "prev") => {
		if (direction == "prev") {
			setSelectedStep((prev) => (prev !== 0 ? prev - 1 : prev));
		} else {
			if (userData && userData.energy > 0) {
				setSelectedStep((prev) =>
					stepsOrder!.length - 1 !== prev ? prev + 1 : prev,
				);
			}
		}
	};

	//This function is used to update a step’s status by ID and increment the completed steps counter.
	const changeStatus = (status: "ns" | "completed" | "wrong", id: number) => {
		if (userData?.energy && userData?.energy > 0) {
			setLesson((prev) => {
				if (prev == undefined) return undefined;
				const steps = prev.steps?.map((step) => {
					if (step._id == id) {
						step.status = status;
						updateUserEnergy(userData.userId, 1);
						loadData();
					}
					return step;
				});
				setCompletedSteps((prev) => prev + 1);

				return { ...prev, steps };
			});
		}
	};

	//This function memoizes a progress bar component based on the percentage of completed steps.
	const progressBar = useMemo(() => {
		return (
			<ProgressBar
				progress={(completedSteps / stepsOrder!.length) * 100}
			></ProgressBar>
		);
	}, [completedSteps, stepsOrder]);

	const phaserRef = useRef<IRefPhaserGame | null>(null);
	const currentScene = (scene: Phaser.Scene) => {
		console.log(scene);
	};

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
					{completed ? (
						<div className="border border-primary/40 bg-black/40 rounded-3xl h-full w-[80%] max-md:w-full relative">
							<BlurCircle />
							<BlurCircle />
							<BlurCircle top="-100px" left="-200px" />
							<BlurCircle bottom="-320px" right="-200px" />
							<Complete xp={25} userData={userData} />
						</div>
					) : step != undefined ? (
						<div className="border border-primary/40 bg-black/40 rounded-3xl h-full w-[80%] max-md:w-full relative">
							{progressBar}

							<div className="text-primary absolute flex gap-2 top-2 text-lg items-center justify-center -translate-x-1/2 left-1/2">
								{userData?.energy || 0} <Zap className="w-5"></Zap>
							</div>

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
								<div className="flex items-center justify-center h-screen">
									<div className="">
										<PhaserGame
											ref={phaserRef}
											currentActiveScene={currentScene}
											world={step.map!}
										/>
									</div>
								</div>
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
