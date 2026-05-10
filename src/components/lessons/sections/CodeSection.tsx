import type { Step } from "@/utils/types";
import { t } from "i18next";
import {
	ArrowLeft,
	ArrowRight,
	Check,
	ChevronLeft,
	ChevronRight,
	Trash,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import CodeEditor from "../CodeEditor";
import useSessionStorage from "@/hooks/useSessionStorage";

interface Props {
	step: Step;
	changeCurrentStep: (direction: "next" | "prev") => void;
	selectedStep: number;
	stepCount: number;
	changeStatus: (status: "ns" | "completed" | "wrong", id: number) => void;
}

/**
 * TextSection is a component that displays a step with title, content, and navigation buttons.
 *
 * @param step - Current step data (title, content, id)
 * @param changeCurrentStep - Function to move between steps (next or previous)
 * @param selectedStep - Index of the current step
 * @param stepCount - Total number of steps
 * @param changeStatus - Updates the status of a step (completed, wrong, or not started)
 */
const CodeSection = ({
	step,
	changeCurrentStep,
	// selectedStep,
	// stepCount,
	changeStatus,
}: Props) => {
	const [code, setCode] = useState(sessionStorage.getItem("code") || "");

	useEffect(() => {
		if (code === undefined) return sessionStorage.setItem("code", code);

		sessionStorage.setItem("code", code);
	}, [code]);

	const [output, setOutput] = useState("");

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getOuput = (...data: any[]) => {
		setOutput((prev) => prev + `${data} `);
	};

	const status = useMemo(() => step.status || "ns", [step]);

	const checkAnswer = () => {
		if (output && step.status === "ns") {
			if (output.trim() === step.rightAnswer) {
				changeStatus("completed", step._id!);
			} else {
				changeStatus("wrong", step._id!);
			}
		}
	};

	return (
		<>
			<div className="flex items-center justify-end flex-col h-full w-full relative">
				<p className="text-white text-wrap font-sans mb-5 text-xl">
					{step.title}
				</p>
				<div className="md:w-[calc(100%-200px)] w-[calc(100%-50px)] h-0.5 bg-white/70 rounded-full mb-5"></div>

				<p className="text-white text-wrap font-sans max-h-80 overflow-scroll text-center mx-10 md:mx-40 whitespace-pre-wrap mb-5">
					{step.content}
				</p>

				<CodeEditor
					getOutput={getOuput}
					value={code}
					setValue={setCode}
				></CodeEditor>

				<div className="relative w-1/2 h-20 mt-10 mb-3">
					<p className="absolute left-3 -top-5 text-secondary">Output:</p>
					<Trash
						className="absolute w-4 -top-6 right-5 stroke-red-600 cursor-pointer"
						onClick={() => {
							setOutput("");
						}}
					></Trash>
					<div className="text-white flex items-center justify-center px-3 py-3 overflow-scroll border border-primary w-full h-full rounded-4xl">
						{output}
					</div>
				</div>

				<div className="">
					<button
						onClick={() => changeCurrentStep("prev")}
						className={`text-white absolute border border-white p-3 rounded-full bottom-7 left-10 hover:scale-110 transition duration-300 cursor-pointer`}
					>
						<ChevronLeft />
					</button>
					{status !== "ns" ? (
						<button
							onClick={() => {
								changeCurrentStep("next");
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
			</div>
		</>
	);
};

export default React.memo(CodeSection);
