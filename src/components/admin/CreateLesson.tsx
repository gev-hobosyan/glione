import { Code, PlusIcon, SquareCheck, TextInitial } from "lucide-react";
import { useCallback, useState } from "react";
import EditStep from "./EditStep";
import Input from "../Input";
import LessonCard from "../LessonCard";
import TextField from "../TextField";
import Message from "./Message";
import type { Lesson, Step, Tag } from "@/utils/types";
import createLesson from "@/utils/backend/createLesson";

// eslint-disable-next-line react-refresh/only-export-components
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
	const [tags, setTags] = useState<Tag[]>([]);
	const [title, setTitle] = useState("Title");
	const [description, setDescription] = useState(
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	);
	const [editDescription, setEditDescription] = useState<boolean>(true);
	const [success, setSuccess] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const createStep = () => {
		setSteps((prev) => {
			const newStep: Step = {
				title: "",
				type: "text",
				content: "",
				icon: icons.text,
			};

			setEditStep(newStep);

			return [...prev, newStep];
		});
	};

	const submitStep = () => {
		const editedStep = editStep;

		setSteps((prev) =>
			prev.map((step) =>
				step._id === editedStep?._id ? editedStep || step : step,
			),
		);

		setEditStep(undefined);
	};

	const submitTitle = () => {
		if (editTitle) {
			setEditTitle((prev) => {
				setTitle(prev!);

				return undefined;
			});
		}
	};

	const submitLesson = useCallback(async () => {
		const lesson: Lesson = {
			title,
			published: true,
			tags,
			authors: [],
			section: "Python",
			steps: steps,
		};

		try {
			const res = await createLesson(lesson);
			if(res.status == 201){setSuccess(true)}
			else{setError(true)}
		} catch (e) {
			setError(true);
		}
	}, [steps, tags, title]);

	return (
		<>
			{success && <Message 
			title="Success"
			text="Lesson is created successfully. Good Luck!"
			type="success"
			/>}
			{error && <Message
			title="Error"
			text="Lesson is not created. Please try again."
			type="error"
			/>}
			{editStep && (
				<EditStep submitStep={submitStep} edit={setEditStep}>
					{editStep}
				</EditStep>
			)}

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
					<div>
						<h1
							className="text-white text-2xl flex items-center justify-center gap-5"
							onDoubleClick={() => setEditTitle(title)}
						>
							{title}
						</h1>

						<div className="flex text-white gap-3 mt-5">
							<p className="bg-primary/40 border-primary border px-3 py-0.5 rounded-full backdrop-blur-lg cursor-pointer hover:scale-105 transition-all duration-300">
								test
							</p>
							<p className="bg-primary/40 border-primary border px-3 py-0.5 rounded-full backdrop-blur-lg">
								test
							</p>
							<p className="bg-primary/40 border-primary border px-3 py-0.5 rounded-full backdrop-blur-lg">
								test
							</p>
							<p className="bg-primary/40 border-primary border px-3 py-0.5 rounded-full backdrop-blur-lg">
								test
							</p>
						</div>
					</div>
				)}

				{editDescription ? (
					<div className="w-full">
						<form
							className="w-full flex flex-col gap-3"
							action={() => setEditDescription(false)}
						>
							<TextField
								id="description"
								value={description}
								setValue={setDescription}
							>
								Descrption
							</TextField>
							<input
								type="submit"
								value="OK"
								className="bg-primary text-white rounded-xl px-4 py-2 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-all duration-300 w-20 self-center"
							></input>
						</form>
					</div>
				) : (
					<div
						className="text-white"
						onDoubleClick={() => setEditDescription(true)}
					>
						{description}
					</div>
				)}
				<LessonCard
					name={title}
					description={description}
					progress={100}
					authors={[
						{ name: "Narek" },
						{ name: "Gevorg" },
						{ name: "Levon" },
					]}
					tags={[
						{ name: "python" },
						{ name: "lessons" },
						{ name: "programming" },
					]}
				></LessonCard>

				<div
					className="text-white bg-primary px-10 py-4 rounded-3xl"
					onClick={submitLesson}
				>
					Submit
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

							<step.icon className="stroke-white w-4" />
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
