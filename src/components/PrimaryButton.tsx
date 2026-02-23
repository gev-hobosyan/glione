interface Props {
	name: string;
}

const PrimaryButton = ({ name }: Props) => {
	return (
		<div className="text-white bg-primary/30 border-primary border-2 backdrop-blur-3xl px-10 py-2 rounded-2xl cursor-pointer">
			{name}
		</div>
	);
};

export default PrimaryButton;
