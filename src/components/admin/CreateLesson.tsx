import {
	Code,
	Edit,
	PlusIcon,
	SquareCheck,
	TextInitial,
	type LucideProps,
} from "lucide-react";
import { useState, type SetStateAction } from "react";
import EditStep from "./EditStep";
import Input from "../Input";

export type Step = {
	id: number;
	title: string;
	type: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
};

export const icons = {
	text: TextInitial,
	code: Code,
	multi: SquareCheck,
};

interface Props {
	steps: Step[];
	setSteps: React.Dispatch<React.SetStateAction<Step[]>>;
}

const CreateLesson = ({ steps, setSteps }: Props) => {
	const [editStep, setEditStep] = useState<Step | undefined>(undefined);
	const [editTitle, setEditTitle] = useState<string | undefined>(undefined);
	const [title, setTitle] = useState("Title");
	const [description, setDescription] = useState(
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	);
	const [editDescription, setEditDescription] = useState<string | undefined>(
		undefined,
	);

	const createStep = () => {
		setSteps((prev) => {
			const newStep = {
				id: prev.length > 0 ? prev.at(-1)!.id + 1 : 0,
				title: "",
				type: icons.text,
			};

			setEditStep(newStep);

			return [...prev, newStep];
		});
	};

	const submitTitle = () => {
		if (editTitle) {
			setEditTitle((prev) => {
				setTitle(prev!);

				return undefined;
			});
		}
	};

	return (
		<>
			{editStep && <EditStep edit={setEditStep}>{editStep}</EditStep>}

			<div className="h-full w-[calc(50vw-5rem)] bg-black/40 ml-3 rounded-3xl border border-primary/40 flex items-center flex-col justify-between py-5 px-10">
				{editTitle !== undefined ? (
					<form
						className="flex items-center justify-center gap-5"
						action={submitTitle}
					>
						<Input
							id="title"
							type="text"
							value={editTitle}
							setValue={setEditTitle}
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
						{title}
						<Edit
							className="w-5 cursor-pointer hover:scale-110 transition-all duration-300"
							onClick={() => setEditTitle(title)}
						/>
					</h1>
				)}

				<div className="text-white">
					{description}
				</div>
				<div className="text-white w-50 h-50 flex items-center justify-center border border-white mb-10 rounded-2xl">
					Preview
				</div>
			</div>

			<div className="h-full w-[50vw] bg-black/40 ml-3 rounded-3xl border border-primary/40 flex flex-col items-center justify-center overflow-scroll">
				{steps.map((step) => (
					<>
						<div
							className="w-150 bg-black/55 border border-primary/50 px-6 py-3 rounded-full flex items-center justify-between shadow-[0_0_10px_#006e2a] cursor-pointer hover:scale-[102%] transition-all duration-300"
							onClick={() => setEditStep(step)}
						>
							<p className="text-white font-[12px]">{step.title}</p>
							<step.type className="stroke-white w-4" />
						</div>
						<div className="h-7 w-0.5 bg-primary/50 shadow-[0_0_20px_#006e2a]"></div>
					</>
				))}
				<div
					className="px-6 py-2 border border-primary/50 rounded-full flex gap-3 text-white items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300"
					onClick={createStep}
				>
					<PlusIcon className="stroke-white w-5" /> Add
				</div>
			</div>
		</>
	);
};

export default CreateLesson;
