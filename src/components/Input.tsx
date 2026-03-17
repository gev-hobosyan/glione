interface Props {
	children: string;
	id: string;
	type: string;
	value: string;
	setValue:
		| React.Dispatch<React.SetStateAction<string>>
		| React.Dispatch<React.SetStateAction<string | undefined>>;
	autoFocus?: boolean;
}

const Input = ({
	id,
	children,
	type,
	value,
	setValue,
	autoFocus = false,
}: Props) => {
	return (
		<div className="relative">
			<input
				id={id}
				type={type}
				className="border-white/50 focus:border-secondary/50 focus:ring-0 ring-0 focus:outline-none focus:shadow-input border rounded-xl w-70 py-2.5 px-5 text-white peer placeholder-transparent"
				placeholder={children}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				required
				autoFocus={autoFocus}
			></input>
			<label
				htmlFor={id}
				className="absolute left-5 top-5 text-white peer-placeholder-shown:text-gray-500 -translate-y-5.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 scale-90 transition-all"
			>
				{children}
			</label>
		</div>
	);
};

export default Input;
