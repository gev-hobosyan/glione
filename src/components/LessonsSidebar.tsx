import { BookOpenCheck, CopyCheck, Swords } from "lucide-react";
import { useState } from "react";
import Step from "./Step";

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

const LessonSidebar = () => {
	const [selectedStep, setSelectedStep] = useState<number | null>(null);

	return (
		<div className="ml-2 border border-primary/40 bg-black/40 rounded-3xl h-full w-70">
			<p className="text-white text-wrap w-60 text-xl ml-5 mt-2.5 mb-2.5">
				Temperature & State Changes in Water
			</p>

			{steps.map((step) => {
				const Icon = step.icon;

				return (
					<Step
						key={step.id}
						icon={
							<Icon className="stroke-primary w-5 group-hover:stroke-white transition-all" />
						}
						index={step.id}
						title={step.title}
						description={step.description}
						isSelected={selectedStep === step.id}
						onClick={() => setSelectedStep(step.id)}
					/>
				);
			})}
		</div>
	);
	<div></div>;
};
export default LessonSidebar;
