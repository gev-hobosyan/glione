import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

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

/**
 * This component is used for the user to write on the input
 *
 * @param {string} children - children is used as placeholder here
 * @param {string} id - to understand that this is the exact name of the specific input
 * @param {string} value - for understanding what's in the input
 * @param {string} type - is used to  understand what type of input is that-text,password or email
 * @param {function} setValue - changes the value of the input when user writes
 * @param {function} autoFocus - automatically focuses on the input once the page is opened (default value: false)
 * @param {function} width - is used for giving the needed amount of space (can be null)
 */

const Input = ({
	id,
	children,
	type,
	value,
	setValue,
	autoFocus = false,
	width,
}: Props) => {
	const [currenType, setCurrentType] = useState(type);

	return (
		<div className="relative">
			<input
				id={id}
				type={currenType}
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
			{type == "password" &&
				(currenType == "password" ? (
					<Eye
						className="stroke-white absolute right-3 -translate-y-1/2 top-1/2 w-5 cursor-pointer hover:scale-110 transition-all duration-300"
						onClick={() => setCurrentType("text")}
					></Eye>
				) : (
					<EyeClosed
						className="stroke-white absolute right-3 -translate-y-1/2 top-1/2 w-5 cursor-pointer hover:scale-110 transition-all duration-300"
						onClick={() => setCurrentType("password")}
					></EyeClosed>
				))}
		</div>
	);
};

export default Input;
