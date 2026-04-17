interface Props {
	progress: number;
}

const ProgressBar = ({ progress }: Props) => {
	return (
		<div className="absolute top-10 w-[calc(100%-100px)] h-4 bg-gray-800 rounded-full flex items-center justify-start -translate-x-1/2 left-1/2">
			<div
				className="h-full bg-primary rounded-full transition-all duration-300"
				style={{
					width: `${progress}%`,
				}}
			></div>
		</div>
	);
};

export default ProgressBar;
