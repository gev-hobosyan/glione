import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const SecondaryButton = ({ children }: Props) => {
	return (
		<div className="text-white bg-transparent border-white/50 border backdrop-blur-3xl px-10 py-2 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 text-center">
			{children}
		</div>
	);
};

export default SecondaryButton;
