import type { LucideProps } from "lucide-react";

interface Props {
	index: number;
	title: string;
	Icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
	isSelected: boolean;
	onClick: () => void;
	status: "ns" | "completed" | "wrong";
}

/**
 * This component displays steps of each lesson on the sidebar.
 * @param {number} index - Step number used for ordering and display.
 * @param {string} title - Text label describing the step.
 * @param {} Icon - Lucide icon component rendered alongside the step.
 * @param {boolean} isSelected - Whether this step is currently active/selected.
 * @param {function} onClick - Function called when the step is clicked.
 * @param {string} status - Current state of the step. ("ns" (not started), "completed", or "wrong").
 */
const Step = ({ index, title, Icon, isSelected, onClick, status }: Props) => {
	return (
		<div
			onClick={onClick}
			className={`border ${status === "wrong" ? "border-red-900" : "border-primary/40"} flex items-center px-2 py-3 gap-2 cursor-pointer group mx-2 mb-2 rounded-3xl hover:scale-105 transition-all duration-300
        	${isSelected && status === "wrong" ? "bg-red-900 text-white" : isSelected ? "bg-green-700 text-white" : status === "completed" ? "bg-primary/40" : status === "wrong" ? "bg-red-800/40" : "hover:bg-green-700"}`}
		>
			<Icon
				className={`${isSelected && status === "wrong" ? "stroke-red-600" : isSelected ? "stroke-white" : status === "wrong" ? "stroke-red-600" : "stroke-green-800"} 2-5 group-hover:stroke-white transition-all`}
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
