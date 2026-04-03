import { Pencil, Trash2 } from "lucide-react";

interface Props {
	text: string;
	check: boolean;
}

const AdminChoice = ({ text, check }: Props) => {
	return (
		<div className="mt-3 flex items-center justify-between gap-3 border border-primary rounded-xl px-4 py-2 bg-transparent mb-2 w-full">
			<div className="flex items-center gap-3">
				<input
					type="checkbox"
					defaultChecked={check}
					className="w-4 h-4 cursor-pointer"
				/>

				<input
					type="text"
					placeholder={text}
					className="bg-transparent focus:outline-none text-white text-sm w-40"
				/>
			</div>

			<div className="flex items-center gap-2 ml-2 border-l border-white/10 pl-2">
				<button className="text-white/50 hover:text-white">
					<Pencil size={14} />
				</button>
				<button className="text-white/50 hover:text-red-400">
					<Trash2 size={14} />
				</button>
			</div>
		</div>
	);
};

export default AdminChoice;
