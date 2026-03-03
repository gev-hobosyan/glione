interface Props {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
	size?: number;
	z?: string;
}

const BlurCircle = ({
	top = "auto",
	bottom = "auto",
	left = "auto",
	right = "auto",
	z = "-z-50",
}: Props) => {
	return (
		<>
			<div
				className={`circle absolute ${z} h-58 w-58 aspect-square rounded-full bg-primary/70 blur-3xl`}
				style={{ top: top, bottom: bottom, left: left, right: right }}
			></div>
		</>
	);
};

export default BlurCircle;
