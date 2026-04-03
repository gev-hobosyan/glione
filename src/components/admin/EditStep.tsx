import { useState, type Dispatch, type SetStateAction } from "react";
import { icons } from "./CreateLesson";
import { X } from "lucide-react";
import Input from "../Input";
import TextField from "../TextField";
import AdminChoice from "./AdminChoice";
import type { Step } from "@/utils/types";

interface Props {
	children: Step;
	edit: Dispatch<SetStateAction<Step | undefined>>;
	submitStep: () => void;
}

const EditStep = ({ children, edit, submitStep }: Props) => {
	const [editTitle, setEditTitle] = useState<string | undefined>(
		children.title ? undefined : children.title,
	);

	const [editContent, setEditContent] = useState<string | undefined>(
		children.content ? undefined : children.content,
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

	const submitContent = () => {
		if (editContent) {
			edit((prev) => {
				return { ...prev, content: editContent } as Step;
			});

			setEditContent(undefined);
		}
	};

	const cycleTypes = () => {
		edit((step) => {
			if (step?.type === "text") {
				return { ...step, type: "multi", icon: icons.multi };
			} else if (step?.type === "multi") {
				return { ...step, type: "code", icon: icons.code };
			} else if (step?.type === "code") {
				return { ...step, type: "text", icon: icons.text };
			}

			return step;
		});
	};

	return (
		<>
			<div
				className="w-screen h-screen absolute z-10 bg-black/50 backdrop-blur-sm top-0 left-0 flex items-center justify-center"
				onClick={() => submitStep()}
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
						<h1
							className="text-white text-2xl flex items-center justify-center gap-5"
							onDoubleClick={() => setEditTitle(children.title)}
						>
							{children.title}
						</h1>
					)}
					<div className="flex items-center justify-center gap-4">
						<children.icon
							className="stroke-white cursor-pointer hover:scale-110 transition-all duration-300"
							onClick={cycleTypes}
						/>
						<X
							className="stroke-white cursor-pointer hover:scale-110 transition-all duration-300"
							onClick={() => submitStep()}
						/>
					</div>
				</div>
				<div className="w-full h-0.5 bg-gray-400 mt-5 rounded-full"></div>
				<div className="my-5">
					{editContent !== undefined ? (
						<form action={submitContent} className="w-full flex flex-col">
							<TextField
								id="content"
								value={editContent}
								setValue={setEditContent}
							>
								Content
							</TextField>
							<input
								type="submit"
								value="OK"
								className="bg-primary text-white rounded-xl px-4 py-2 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-all duration-300 self-center"
							></input>
						</form>
					) : (
						<div
							className="text-white mt-5 wrap-anywhere"
							onDoubleClick={() => setEditContent(children.content)}
						>
							{children.content}
						</div>
					)}
				</div>
				<div className="w-full">
					<AdminChoice text="Option 1" check={false} />
					<AdminChoice text="Option 2" check={false} />
					<AdminChoice text="Option 3" check={false} />
				</div>
			</div>
		</>
	);
};

export default EditStep;
