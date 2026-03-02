interface Props {
	children: string;
}

const PrimaryButton = ({ children }: Props) => {
	return (
		<div className="text-white bg-transparent border-white/50 border backdrop-blur-3xl px-10 py-2 rounded-2xl cursor-pointer hover:scale-110 transition-all duration-200 text-center">
			{children}
		</div>
	);
};

export default PrimaryButton;