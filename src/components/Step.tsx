import type { LucideProps } from "lucide-react";

interface Props {
	index: number;
	title: string;
	Icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	isSelected: boolean;
	onClick: () => void;
}

const Step = ({ index, title, Icon, isSelected, onClick }: Props) => {
	return (
		<div
			onClick={onClick}
			className={`border border-primary/40 flex items-center px-2 py-3 gap-2 cursor-pointer group mx-2 mb-2 rounded-3xl hover:scale-105 transition-all duration-300
        ${isSelected ? "bg-green-700 text-white" : "hover:bg-green-700"}
      `}
		>
			<Icon
				className={`${!isSelected ? "stroke-primary" : "stroke-white"} 2-5 group-hover:stroke-white transition-all`}
			/>

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
