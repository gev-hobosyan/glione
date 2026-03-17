import { useState, type Dispatch, type SetStateAction } from "react";
import type { Step } from "./CreateLesson";
import { Edit, X } from "lucide-react";
import Input from "../Input";

interface Props {
	children: Step;
	edit: Dispatch<SetStateAction<Step | undefined>>;
}

const EditStep = ({ children, edit }: Props) => {
	const [editTitle, setEditTitle] = useState<string | undefined>(
		children.title ? undefined : children.title,
	);

	if (children === undefined) {
		return <></>;
	}

	const submitTitle = () => {
		if (editTitle) {
			edit((prev) => {
				return { ...prev, title: editTitle } as Step;
			});

			setEditTitle(undefined);
		}
	};

	return (
		<>
			<div
				className="w-screen h-screen absolute z-10 bg-black/50 backdrop-blur-sm top-0 left-0 flex items-center justify-center"
				onClick={() => edit(undefined)}
			></div>
			<div className="absolute top-12.5 left-12.5 bottom-12.5 right-12.5 bg-black rounded-4xl border border-primary/50 shadow-effective px-10 py-7 z-50">
				<div className="flex items-center justify-between">
					{editTitle !== undefined ? (
						<form
							className="flex items-center justify-center gap-5"
							action={submitTitle}
						>
							<Input
								id="title"
								value={editTitle}
								setValue={setEditTitle}
								type="text"
							>
								{""}
							</Input>
							<input
								type="submit"
								value="OK"
								className="bg-primary text-white rounded-xl px-4 py-2 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-all duration-300"
							></input>
						</form>
					) : (
						<h1 className="text-white text-2xl flex items-center justify-center gap-5">
							{children.title}{" "}
							<Edit
								className="w-5 cursor-pointer hover:scale-110 transition-all duration-300"
								onClick={() => setEditTitle(children.title)}
							/>
						</h1>
					)}
					<div className="flex items-center justify-center gap-4">
						<children.type className="stroke-white cursor-pointer hover:scale-110 transition-all duration-300" />
						<X
							className="stroke-white cursor-pointer hover:scale-110 transition-all duration-300"
							onClick={() => edit(undefined)}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditStep;
