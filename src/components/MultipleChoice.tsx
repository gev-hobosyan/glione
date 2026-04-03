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
			<div className="w-full h-full flex flex-col items-center justify-center px-10">
				<h1 className="text-white text-2xl font-bold">Vaporized Water</h1>
				<div className="w-[calc(100%-200px)] h-0.5 bg-white/70 rounded-full my-10"></div>
				<p className="text-white mb-4 place-self-start">
					Which of the following is a correct way to create a variable in
					Python
				</p>
				<div className="flex w-full items-center gap-4 flex-col">
					{choices.map((choice) => (
						<Choice key={choice.text} isRight={choice.isRight}>
							{choice.text}
						</Choice>
					))}
				</div>
			</div>
		</>
	);
};

export default MultipleChoice;
