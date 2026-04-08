import type { Step } from "@/utils/types";

interface Props {
	step: Step;
}

const TextSection = ({ step }: Props) => {
	return (
		<div className="flex items-center justify-center flex-col h-full w-full">
			<p className="text-white text-wrap font-sans mb-7 text-xl">
				{step.title}
			</p>
			<div className="w-165 h-0.5 bg-white/20 mb-7"></div>
			<p className="text-white text-wrap ml-25 mr-25 font-sans text-s mb-20">
				{step.content}
			</p>
		</div>
	);
};

export default TextSection;
