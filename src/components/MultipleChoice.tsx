import type { Choice as ChoiceType, Step } from "@/utils/types";
import Choice from "./Choice";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

interface Props {
	step: Step;
	changeCurrentStep: (direction: "next" | "prev") => void;
	selectedStep: number;
	stepCount: number;
	changeStatus: (status: "ns" | "completed" | "wrong", id: number) => void;
}

const MultipleChoice = ({
	step,
	changeCurrentStep,
	selectedStep,
	stepCount,
	changeStatus,
}: Props) => {
	const [answer, setAnswer] = useState<ChoiceType | undefined>(undefined);
	const [completed, setCompleted] = useState<boolean>(answer !== undefined);

	const check = (id: string) => {
		setAnswer(step.choices?.find((c) => c._id === id));
	};

	const checkAnswer = () => {
		if (answer && step.status === "ns") {
			if (answer?.isRight) {
				changeStatus("completed", step._id!);
				console.log("Yeah");
			} else {
				changeStatus("wrong", step._id!);
				console.log("No");
			}

			setCompleted(true);
		}
	};

	console.log(completed);

	return (
		<>
			<div className="w-full h-full flex flex-col items-center justify-center px-10 relative">
				<h1 className="text-white text-2xl font-bold">{step.title}</h1>
				<div className="w-[calc(100%-200px)] h-0.5 bg-white/70 rounded-full my-10"></div>
				<p className="text-white mb-4 place-self-start">{step.content}</p>
				<div className="flex w-full items-center gap-4 flex-col">
					{step.choices?.map((c) => {
						const choice = c as ChoiceType;
						return (
							<Choice
								key={choice._id}
								isRight={choice.isRight}
								isChecked={answer?._id == choice._id}
								check={() => check(choice._id!)}
							>
								{choice.text}
							</Choice>
						);
					})}
				</div>
				<div className="flex justify-center gap-6  text-white absolute bottom-10  ">
					<button
						onClick={() => changeCurrentStep("prev")}
						className={`group flex items-center gap-2 border border-white rounded-full px-6 py-2 text-sm cursor-pointer ${selectedStep == 0 ? "hidden" : ""}`}
					>
						<ArrowLeft
							className=" transition duration-300 group-hover:-translate-x-0.5"
							size={18}
						/>
						Previous
					</button>

					{completed ? (
						<button
							onClick={() => {
								changeCurrentStep("next");
								setCompleted(false);
								setAnswer(undefined);
							}}
							className={`group flex items-center gap-2 ${step.status === "wrong" ? "bg-red-900" : "bg-green-900"} rounded-full px-10 py-2 text-sm cursor-pointer `}
						>
							Next
							<ArrowRight
								className="transition duration-300 group-hover:translate-x-0.5"
								size={18}
							/>
						</button>
					) : (
						<button
							onClick={() => checkAnswer()}
							className={`group flex items-center gap-2 bg-green-900 rounded-full px-10 py-2 text-sm cursor-pointer`}
						>
							Check
							<Check
								className="transition duration-300 group-hover:-translate-y-1"
								size={18}
							/>
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default MultipleChoice;

//${selectedStep == stepCount - 1 ? "hidden" : ""}
