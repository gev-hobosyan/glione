import type { Choice as ChoiceType, Step } from "@/utils/types";
import Choice from "./Choice";
interface Props {
	step: Step;
}

const MultipleChoice = ({ step }: Props) => {
	console.log(step.choices);
	return (
		<>
			<div className="w-full h-full flex flex-col items-center justify-center px-10">
				<h1 className="text-white text-2xl font-bold">{step.title}</h1>
				<div className="w-[calc(100%-200px)] h-0.5 bg-white/70 rounded-full my-10"></div>
				<p className="text-white mb-4 place-self-start">{step.content}</p>
				<div className="flex w-full items-center gap-4 flex-col">
					{step.choices?.map((c) => {
						const choice = c as ChoiceType;
						return (
							<Choice key={choice._id} isRight={choice.isRight}>
								{choice.text}
							</Choice>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default MultipleChoice;
