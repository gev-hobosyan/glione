interface Props {
	children: string;
	isRight: boolean;
	isChecked: boolean;
	check: () => void;
}

/**
 * This is a Choice component representing a selectable radio option.
 * @param {string} children - label text displayed for the choice.
 * @param {boolean} isRight - whether this choice is the correct/right answer.
 * @param {boolean} isChecked - whether this choice is currently selected.
 * @param {function} check - runs when the choice is selected.
 */
const Choice = ({ children, isChecked, check }: Props) => {
	return (
		<>
			<div className="border border-primary w-full px-5 py-1.5 rounded-lg flex items-center gap-5 has-checked:shadow-[0_0_15px_#006e2a] group">
				<input
					id={children}
					type="radio"
					name="choice"
					onChange={() => check()}
					className="appearance-none border border-white w-4 h-4 rounded-full relative checked:after:absolute checked:after:bg-primary checked:after:z-2 after:w-2.5 after:h-2.5 checked:after:rounded-full checked:after:top-0.5 checked:after:left-0.5 after:scale-0 checked:after:scale-100 transition-transform duration-300 cursor-pointer group-hover:scale-110 group-hover:shadow-[0_0_100px_#006e2a] shrink-0"
					checked={isChecked}
				/>
				<label htmlFor={children} className="text-white">
					{children}
				</label>
			</div>
		</>
	);
};
export default Choice;
