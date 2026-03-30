import Choice from "./Choice";

const MultipleChoice = () => {
	const choices = [
		{
			text: "int x = 5",
			isRight: true,
		},
		{
			text: "x == 5",
			isRight: false,
		},
		{
			text: "declare x = 5",
			isRight: false,
		},
		{
			text: "x := int(5)",
			isRight: false,
		},
	];
	return (
		<>
			<div className="w-full flex flex-col items-center justify-center ml-5">
				<p className="text-green-700/70 mb-4 place-self-start">
					Which of the following is a correct way to create a variable in
					Python
				</p>
				<div className="flex w-full items-center gap-4 flex-col">
					{choices.map((choice) => (
						<Choice isRight={choice.isRight}>{choice.text}</Choice>
					))}
				</div>
			</div>
		</>
	);
};

export default MultipleChoice;
