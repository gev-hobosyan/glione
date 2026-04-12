import Step from "./Step";
import type { Lesson } from "@/utils/types";
import { icons } from "./admin/CreateLesson";

interface Props {
	lesson: Lesson;
	selectedStep: number | null;
	setSelectedStep: React.Dispatch<React.SetStateAction<number | null>>;
	stepsOrder: number[];
}

const LessonSidebar = ({
	lesson,
	selectedStep,
	setSelectedStep,
	stepsOrder,
}: Props) => {
	return (
		<div className="ml-2 border border-primary/40 bg-black/40 rounded-3xl h-full w-[20%]">
			<div className="flex gap-1 items-center justify-center flex-wrap px-10 py-3">
				{lesson.authors!.map((author) => (
					<p key={author.name} className="text-[13px] text-gray-400">
						{author.name}
					</p>
				))}
			</div>
			<p className="text-white wrap-anywhere text-xl text-center py-3 px-2 font-bold">
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
				const Icon = icons[step.type];

				return (
					<Step
						key={step.title}
						index={index + 1}
						title={step.title}
						Icon={Icon}
						isSelected={
							selectedStep ===
							stepsOrder.findIndex((value) => value === step._id!)
						}
						onClick={() =>
							setSelectedStep(
								stepsOrder.findIndex((value) => value === step._id!),
							)
						}
						status={step.status}
					/>
				);
			})}
		</div>
	);
};

export default LessonSidebar;
