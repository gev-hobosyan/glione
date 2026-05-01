import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
	onClick?: () => void;
}

/**
 * This component is the main button used throughout the project.
 * @param {ReactNode} children - elements to display on the button (text, icon, etc).
 * @param {function} onClick - actions that happen once the button is clicked.
 */
const PrimaryButton = ({ children, onClick }: Props) => {
	return (
		<div
			className="text-white bg-primary/30 border-primary border backdrop-blur-3xl px-10 py-2 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 text-center z-6"
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default PrimaryButton;
