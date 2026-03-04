interface Props {
	name: string;
}

const PrimaryButton = ({ name }: Props) => {
	return (
		<div className="text-white bg-primary/30 border-primary border backdrop-blur-3xl px-10 py-2 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 text-center">
			{name}
		</div>
	);
};

export default PrimaryButton;
