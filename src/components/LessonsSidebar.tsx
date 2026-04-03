import { Book, BookOpenCheck, CopyCheck, Swords } from "lucide-react";
import { useState } from "react";
import Step from "./Step";
import type { Lesson } from "@/utils/types";
import { icons } from "./admin/CreateLesson";

const steps = [
	{
		id: 1,
		title: "Evaporative cooling",
		description: "8 minutes",
		icon: BookOpenCheck,
	},
	{
		id: 2,
		title: "Vaporized Water Transform",
		description: "25 minutes",
		icon: CopyCheck,
	},
	{
		id: 3,
		title: "Heat Specificity",
		description: "30 minutes",
		icon: Swords,
	},
];

interface Props {
	lesson: Lesson;
}

const LessonSidebar = ({ lesson }: Props) => {
	const [selectedStep, setSelectedStep] = useState<number | null>(null);

	console.log(lesson.steps);

	return (
		<div className="ml-2 border border-primary/40 bg-black/40 rounded-3xl h-full w-70">
			<div className="flex gap-1 items-center justify-center flex-wrap px-10 py-3">
				{lesson.authors!.map((author) => (
					<p key={author.name} className="text-[13px] text-gray-400">
						{author.name}
					</p>
				))}
			</div>
			<p className="text-white wrap-anywhere w-60 text-xl text-center py-3 px-2 font-bold">
				{lesson.title}
			</p>
			<div className="flex gap-2 items-center justify-center flex-wrap px-10 py-3">
				{lesson.tags!.map((tag) => (
					<p
						key={tag.name}
						className="text-[12px] text-white px-3 py-0.5 bg-primary/40 border border-primary rounded-full"
					>
						{tag.name}
					</p>
				))}
			</div>

			{lesson.steps!.map((step, index) => {
				const Icon = icons["text"];

				return (
					<Step
						key={step.title}
						index={index + 1}
						title={step.title}
						icon={
							<Icon className="stroke-primary 2-5 group-hover:stroke-white transition-all"></Icon>
						}
						isSelected={selectedStep === step._id}
						onClick={() => setSelectedStep(step._id)}
					/>
				);
			})}
		</div>
	);
};

export default LessonSidebar;
