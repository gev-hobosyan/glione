import { useState, type Dispatch, type SetStateAction } from "react";
import { icons } from "./CreateLesson";
import { TextInitial, Trash2, X } from "lucide-react";
import Input from "../inputs/Input";
import type { Choice, Step } from "@/utils/types";
import Hint from "../common/Hint";
import TextStep from "./sections/TextStep";
import ChoiceStep from "./sections/ChoiceStep";

interface Props {
	children: Step;
	edit: Dispatch<SetStateAction<Step | undefined>>;
	submitStep: () => void;
	deleteStep: () => void;
}

const EditStep = ({ children, edit, submitStep, deleteStep }: Props) => {
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

	const newChoice = () => {
		const newChoice: Choice = {
			text: "",
			isRight: false,
		};

		edit((prev) => {
			if (prev === undefined) return undefined;

			if (prev.choices === undefined || prev.choices.length === 0) {
				newChoice.id = 0;

				return { ...prev, choices: [newChoice] };
			}

			newChoice.id = prev.choices.length;
			return { ...prev, choices: [...prev.choices, newChoice] };
		});
	};

	const deleteChoice = (id: number) => {
		edit((prev) => {
			if (prev === undefined) return undefined;

			const filtered = prev.choices?.filter((choice) => choice.id !== id);

			return { ...prev, choices: filtered };
		});
	};

	const check = (id: number) => {
		edit((prev) => {
			if (prev === undefined) return undefined;

			const choices = prev.choices?.map((choice) => {
				if (choice.id === id) {
					choice.isRight = !choice.isRight;
				} else {
					choice.isRight = false;
				}

				return choice;
			});

			return { ...prev, choices };
		});
	};

	const editChoiceText = (value: string, id: number) => {
		edit((prev) => {
			if (prev === undefined) return undefined;

			const choices = prev.choices?.map((choice) => {
				if (choice.id === id) {
					choice.text = value;
				}

				return choice;
			});

			return { ...prev, choices };
		});
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

	const Icon = children.icon || TextInitial;

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
							className="text-white text-2xl flex items-center justify-center gap-5 relative group"
							onDoubleClick={() => setEditTitle(children.title)}
						>
							{children.title}
							<Hint>Double click to edit</Hint>
						</h1>
					)}
					<div className="flex items-center justify-center gap-4">
						<Trash2
							className="stroke-red-700 cursor-pointer hover:scale-110 transition-all duration-300"
							onClick={deleteStep}
						/>
						<Icon
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
				<TextStep
					editContent={editContent}
					setEditContent={setEditContent}
					submitContent={submitContent}
				>
					{children}
				</TextStep>
				{children.type == "multi" ? (
					<ChoiceStep
						changeText={editChoiceText}
						newChoice={newChoice}
						deleteChoice={deleteChoice}
						check={check}
					>
						{children.choices}
					</ChoiceStep>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default EditStep;
