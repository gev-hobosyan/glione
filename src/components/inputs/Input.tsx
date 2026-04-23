interface Props {
	children: string;
	id: string;
	type: string;
	value: string;
	setValue:
		| React.Dispatch<React.SetStateAction<string>>
		| React.Dispatch<React.SetStateAction<string | undefined>>;
	autoFocus?: boolean;
	width?: string;
}

const Input = ({
	id,
	children,
	type,
	value,
	setValue,
	autoFocus = false,
	width,
}: Props) => {
	return (
		<div className="relative">
			<input
				id={id}
				type={type}
				className={`border-white/50 focus:border-secondary/50 focus:ring-0 ring-0 focus:outline-none focus:shadow-input border rounded-xl py-2.5 px-5 text-white peer placeholder-transparent w-70 ${width ? width : "max-sm:w-40 sm:w-50"}`}
				placeholder={children}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				required
				autoFocus={autoFocus}
			></input>
			<label
				htmlFor={id}
				className="absolute left-5 top-3 text-white peer-placeholder-shown:text-gray-500 -translate-y-5.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-90 scale-90 transition-all"
			>
				{children}
			</label>
		</div>
	);
};

export default Input;
