import type { Choice as ChoiceType, Step } from "@/utils/types";
import Choice from "../Choice";
import {
	ArrowLeft,
	ArrowRight,
	Check,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { t } from "i18next";

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
	changeStatus,
}: Props) => {
	const [answer, setAnswer] = useState<ChoiceType | undefined>(undefined);
	const [completed, setCompleted] = useState<boolean>(answer !== undefined);

	const [status, setStatus] = useState<"ns" | "right" | "wrong">("ns");
	const [message, setMessage] = useState<string>("");

	console.log(status, message);

	const check = (id: string) => {
		setAnswer(step.choices?.find((c) => c._id === id));
	};

	const checkAnswer = () => {
		if (answer && step.status === "ns") {
			if (answer?.isRight) {
				changeStatus("completed", step._id!);
				setStatus("right");
				setMessage("Good job!");
			} else {
				const rightAnswer = step.choices?.find(
					(answer) => answer.isRight == true,
				);
				changeStatus("wrong", step._id!);
				setStatus("wrong");
				setMessage(
					`Oops.. Wrong answer!! The right answer was: ${rightAnswer?.text}`,
				);
			}

			setCompleted(true);
		}
	};

	return (
		<>
			<div className="w-full h-full flex flex-col items-center justify-center px-10 absolute bottom-20">
				<h1 className="text-white text-2xl font-bold">{step.title}</h1>
				<div className="md:w-[calc(100%-200px)] w-[calc(100%-50px)] h-0.5 bg-white/70 rounded-full my-10"></div>
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

				<div className="md:hidden">
					<button
						onClick={() => changeCurrentStep("prev")}
						className={`text-white absolute border border-white p-3 rounded-full bottom-7 left-10 hover:scale-110 transition duration-300 cursor-pointer`}
					>
						<ChevronLeft />
					</button>
					{completed ? (
						<button
							onClick={() => {
								changeCurrentStep("next");
								setCompleted(false);
								setAnswer(undefined);
								setStatus("ns");
							}}
							className={`text-white absolute border border-primary/40 bg-primary/40 p-3 rounded-full bottom-7 right-10 hover:scale-110 transition duration-300 cursor-pointer`}
						>
							<ChevronRight />
						</button>
					) : (
						<button
							onClick={() => checkAnswer()}
							className={`text-white absolute border border-primary/40 bg-primary/40 p-3 rounded-full bottom-7 right-10 hover:-translate-y-1 transition duration-300 cursor-pointer`}
						>
							<Check />
						</button>
					)}
				</div>

				<div className="flex justify-center gap-6  text-white absolute bottom-0 max-md:hidden">
					<button
						onClick={() => changeCurrentStep("prev")}
						className={`group flex items-center gap-2 border border-white rounded-full px-6 py-2 text-sm cursor-pointer ${selectedStep == 0 ? "hidden" : ""}`}
					>
						<ArrowLeft
							className=" transition duration-300 group-hover:-translate-x-0.5"
							size={18}
						/>
						{t("Previous")}
					</button>

					{completed ? (
						<button
							onClick={() => {
								changeCurrentStep("next");
								setCompleted(false);
								setAnswer(undefined);
								setStatus("ns");
							}}
							className={`group flex items-center gap-2 ${step.status === "wrong" ? "bg-red-900" : "bg-green-900"} rounded-full px-10 py-2 text-sm cursor-pointer `}
						>
							{t("Next")}
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
							{t("Check")}
							<Check
								className="transition duration-300 group-hover:-translate-y-1"
								size={18}
							/>
						</button>
					)}
				</div>
				{
					status !== "ns" &&
					<>
						<img src="/medusa.png" className="w-45 absolute right-10 -bottom-12" />
						<p className="text-white text-lg font-semibold text-center px-6 absolute bottom-18">
							{message}
						</p></>}
			</div>
		</>
	);
};

export default MultipleChoice;

//${selectedStep == stepCount - 1 ? "hidden" : ""}
