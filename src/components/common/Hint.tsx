interface Props {
	children: string;
}

/**
 * This component is a small tooltip that appears on hover to display brief contextual information.
 * @param {string} children - the text content displayed inside the hint.
 */
const Hint = ({ children }: Props) => {
	return (
		<div className="absolute -top-6 bg-gray-950 rounded-lg w-0 h-0 overflow-hidden group-hover:overflow-visible group-hover:block group-hover:px-2 group-hover:py-1 group-hover:w-fit group-hover:h-fit transition-all duration-300">
			<p className="text-xs font-light text-nowrap ">{children}</p>
		</div>
	);
};

export default Hint;
