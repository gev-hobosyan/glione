import type { ReactNode } from "react";
interface Props {
	index: number;
	title: string;
	description: string;
	icon: ReactNode;
	isSelected: boolean;
	onClick: () => void;
}

const Step = ({
	index,
	title,
	description,
	icon,
	isSelected,
	onClick,
}: Props) => {
	return (
		<div
			onClick={onClick}
			className={`border border-primary/40 flex items-center px-2 py-2 gap-2 cursor-pointer transition group
        ${isSelected ? "bg-primary/40 text-white" : "hover:bg-green-700"}
      `}
		>
			<div>{icon}</div>

			<div>
				<div className="flex items-center">
					<p className="text-white text-[15px]">
						{index > 10 ? index : `0${index}`}: {title}
					</p>
				</div>
				<p className="text-gray-400 text-sm">{description}</p>
			</div>
		</div>
	);
};

export default Step;
