import type { ReactNode } from "react";
interface Props {
	index: number;
	title: string;
	icon: ReactNode;
	isSelected: boolean;
	onClick: () => void;
}

const Step = ({ index, title, icon, isSelected, onClick }: Props) => {
	return (
		<div
			onClick={onClick}
			className={`border border-primary/40 flex items-center px-2 py-3 gap-2 cursor-pointer group mx-2 mb-2 rounded-3xl hover:scale-105 transition-all duration-300
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
			</div>
		</div>
	);
};

export default Step;
