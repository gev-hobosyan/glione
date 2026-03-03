interface Props {
	children: string;
	id: string;
	type: string;
}

const Input = ({ id, children, type }: Props) => {
	return (
		<div className="relative">
			<input
				id={id}
				type={type}
				className="border-white/50 focus:border-secondary/50 focus:ring-0 ring-0 focus:outline-none focus:shadow-input border rounded-xl w-70 py-2.5 px-5 mt-2 text-white peer placeholder-transparent"
				placeholder={children}
			></input>
			<label
				htmlFor={id}
				className="absolute left-5 top-5 peer-focus:text-white peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-5.5 peer-focus:scale-90 transition-all"
			>
				{children}
			</label>
		</div>
	);
};

export default Input;
