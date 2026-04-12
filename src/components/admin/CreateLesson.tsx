import { Code, PlusIcon, SquareCheck, TextInitial } from "lucide-react";
import { useCallback, useState } from "react";
import EditStep from "./EditStep";
import Input from "../Input";
import LessonCard from "../LessonCard";
import TextField from "../TextField";
import Message from "./Message";
import type { Lesson, Step, Tag } from "@/utils/types";
import createLesson from "@/utils/backend/createLesson";
import Hint from "../Hint";
import EditTag from "./EditTag";
import LoadingSpinner from "../LoadingSpinner";

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
	const [editTitle, setEditTitle] = useState<boolean>(true);
	const [editTag, setEditTag] = useState<Tag | undefined>();
	const [tags, setTags] = useState<Tag[]>([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [editDescription, setEditDescription] = useState<boolean>(true);

	const [currentStepId, setCurentStepId] = useState(0);
	const [currentTagId, setCurentTagId] = useState(0);

	const [success, setSuccess] = useState<string | undefined>(undefined);
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const createStep = () => {
		setSteps((prev) => {
			const newStep: Step = {
				id: currentStepId,
				title: "",
				type: "text",
				content: "",
				icon: icons.text,
			};

			setCurentStepId((prev) => prev + 1);

			setEditStep(newStep);

			return [...prev, newStep];
		});
	};

	const deleteStep = (id: number) => {
		setSteps((prev) => prev.filter((step) => step.id !== id));

		setEditStep(undefined);
	};

	const createTag = () => {
		setTags((prev) => {
			const newTag: Tag = {
				id: currentTagId,
				name: "",
			};

			setCurentTagId((prev) => prev + 1);

			setEditTag(newTag);

			return [...prev, newTag];
		});
	};

	const submitStep = () => {
		const editedStep = editStep;

		setSteps((prev) =>
			prev.map((step) =>
				step.id === editedStep?.id ? editedStep || step : step,
			),
		);

		setEditStep(undefined);
	};

	const submitTag = (text: string) => {
		const editedTag = editTag ? { ...editTag, name: text } : undefined;

		setTags((prev) =>
			prev.map((tag) => (tag.id === editedTag?.id ? editedTag || tag : tag)),
		);

		setEditTag(undefined);
	};

	const submitLesson = useCallback(async () => {
		const lesson: Lesson = {
			title,
			published: true,
			description,
			tags,
			authors: [],
			section: "Python",
			steps: steps,
		};

		setLoading(true);

		try {
			const res = await createLesson(lesson);
			if (res.status == 201) {
				const lesson = await res.json();

				setSuccess(lesson._id);
			} else {
				setError(true);
			}
		} catch (e) {
			console.log(e);
			setError(true);
		} finally {
			setLoading(false);
		}
	}, [steps, tags, title, description]);

	return (
		<>
			{editTag && (
				<EditTag edit={setEditTag} submit={submitTag}>
					{editTag}
				</EditTag>
			)}

			{loading ? (
				<div className="w-screen h-screen bg-black/50 backdrop-blur-md absolute z-50 flex items-center justify-center">
					<LoadingSpinner></LoadingSpinner>
				</div>
			) : error ? (
				<Message
					id={""}
					title="Error"
					text="Lesson is not created. Please try again."
					type="error"
				/>
			) : (
				success && (
					<Message
						id={success}
						title="Success"
						text="Lesson is created successfully. Good Luck!"
						type="success"
					/>
				)
			)}

			{editStep && (
				<EditStep
					submitStep={submitStep}
					edit={setEditStep}
					deleteStep={() => deleteStep(editStep.id)}
				>
					{editStep}
				</EditStep>
			)}

			<div>
				<div className="w-[calc(100vw-7.5rem)] h-full max-md:h-[calc(100vh-15rem)] flex items-center justify-center">
					<div className="h-full w-[calc(50vw-5rem)] bg-black/40 ml-3 rounded-3xl border border-primary/40 flex items-center flex-col justify-between py-5 px-10">
						{editTitle ? (
							<form
								className="flex items-center justify-center gap-5"
								action={() => setEditTitle(false)}
							>
								<Input
									id="title"
									type="text"
									value={title}
									setValue={setTitle}
								>
									Title
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
									className="text-white text-2xl flex items-center justify-center gap-5 relative group"
									onDoubleClick={() => setEditTitle(true)}
								>
									{title}
									<Hint>Double click to edit</Hint>
								</h1>

								<div className="flex text-white gap-3 mt-5 items-center justify-center">
									{tags.map((tag) => (
										<p
											className="bg-primary/40 border-primary border px-3 py-0.5 rounded-full backdrop-blur-lg cursor-pointer hover:scale-105 transition-all duration-300"
											key={tag.name}
										>
											{tag.name}
										</p>
									))}
									<p
										className="text-xl cursor-pointer hover:scale-110 transition-all duration-200"
										onClick={createTag}
									>
										+
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
								className="relative group text-white"
								onDoubleClick={() => setEditDescription(true)}
							>
								<h1 className="text-white h-40 overflow-scroll">
									{description}
								</h1>
								<Hint>Double click to edit</Hint>
							</div>
						)}
						<div className="max-md:hidden">
							<LessonCard
								id=""
								name={title}
								description={description}
								progress={100}
								authors={[]}
								tags={tags}
							></LessonCard>
						</div>

						<div
							className="text-white bg-primary px-10 py-4 rounded-3xl cursor-pointer hover:scale-110 transition duration-200"
							onClick={submitLesson}
						>
							Submit
						</div>
					</div>

					<div className="h-full w-[50vw] bg-black/40 ml-3 rounded-3xl border border-primary/40 flex flex-col items-center justify-center overflow-scroll">
						{steps.map((step) => {
							const Icon = step.icon || TextInitial;

							return (
								<>
									<div
										className="w-[80%] bg-black/55 border border-primary/50 px-6 py-3 rounded-full flex items-center justify-between shadow-[0_0_10px_#006e2a] cursor-pointer hover:scale-[102%] transition-all duration-300"
										onClick={() => setEditStep(step)}
									>
										<p className="text-white font-[12px]">
											{step.title}
										</p>

										<Icon className="stroke-white w-4" />
									</div>
									<div className="h-7 w-0.5 bg-primary/50 shadow-[0_0_20px_#006e2a]"></div>
								</>
							);
						})}
						<div
							className="px-6 py-2 border border-primary/50 rounded-full flex gap-3 text-white items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300"
							onClick={createStep}
						>
							<PlusIcon className="stroke-white w-5" /> Add
						</div>
					</div>
				</div>
				<div className="md:hidden mt-1 flex items-center justify-center bg-black/70 py-1 rounded-3xl border border-primary/50 ml-3">
					<LessonCard
						id=""
						name={title}
						description={description}
						progress={100}
						authors={[]}
						tags={tags}
					></LessonCard>
				</div>
			</div>
		</>
	);
};

export default CreateLesson;
