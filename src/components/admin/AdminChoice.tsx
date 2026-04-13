import type { Choice } from "@/utils/types";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import Hint from "../common/Hint";

interface Props {
	children: Choice;
	check: () => void;
	deleteChoice: () => void;
	changeText: (value: string) => void;
}

const AdminChoice = ({ children, check, deleteChoice, changeText }: Props) => {
	const [text, setText] = useState(children.text);
	const [editText, setEditText] = useState(false);

	const submitChanges = () => {
		if (text) {
			changeText(text);

			setText(children.text);
			setEditText(false);
		}
	};

	return (
		<div className="mt-3 flex items-center justify-between gap-3 border border-primary rounded-xl px-4 py-2 bg-transparent mb-2 w-full">
			<div className="flex items-center gap-3">
				<input
					type="radio"
					name="choice"
					checked={children.isRight}
					onChange={() => check()}
					className="appearance-none border border-white w-4 h-4 rounded-full relative checked:after:absolute checked:after:bg-primary checked:after:z-2 after:w-2.5 after:h-2.5 checked:after:rounded-full checked:after:top-0.5 checked:after:left-0.5 after:scale-0 checked:after:scale-100 transition-transform duration-300 cursor-pointer"
				/>

				{editText ? (
					<form action={submitChanges}>
						<input
							type="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
							className="bg-transparent focus:outline-none text-white text-md w-40"
						/>

						<input
							type="submit"
							value={"OK"}
							className="text-white bg-primary px-3 text-[13px] rounded-md"
						/>
					</form>
				) : (
					<p
						className="text-white relative group min-w-10 text-center min-h-6 text-md"
						onDoubleClick={() => setEditText(true)}
					>
						{children.text}
						<Hint>Double click to edit</Hint>
					</p>
				)}
			</div>

			<div className="flex items-center gap-2 ml-2 border-l border-white/10 pl-2">
				<button
					className="text-white/50 hover:text-red-400 cursor-pointer"
					onClick={deleteChoice}
				>
					<Trash2 size={14} />
				</button>
			</div>
		</div>
	);
};

export default AdminChoice;
