interface Props {
	children: string;
	isRight: boolean;
}

const Choice = ({ children, isRight }: Props) => {
	return (
		<>
			<div className="border border-primary w-full px-5 py-1.5 rounded-lg flex items-center gap-5 has-checked:shadow-[0_0_15px_#006e2a]">
				<input
					id={children}
					type="radio"
					name="choice"
					className="appearance-none border border-white w-4 h-4 rounded-full relative checked:after:absolute checked:after:bg-primary checked:after:z-2 after:w-2.5 after:h-2.5 checked:after:rounded-full checked:after:top-0.5 checked:after:left-0.5 after:scale-0 checked:after:scale-100 transition-transform duration-300"
				/>
				<label htmlFor={children} className="text-white">
					{children}
				</label>
			</div>
		</>
	);
};
export default Choice;
