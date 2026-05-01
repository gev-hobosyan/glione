import { Code, PlusIcon, SquareCheck, TextInitial } from "lucide-react";
import { useCallback, useState } from "react";
import EditStep from "./EditStep";
import Input from "../inputs/Input";
import LessonCard from "../lessons/LessonCard";
import TextField from "../inputs/TextField";
import Message from "./Message";
import type { Lesson, Step, Tag } from "@/utils/types";
import createLesson from "@/utils/backend/createLesson";
import Hint from "../common/Hint";
import EditTag from "./EditTag";
import LoadingSpinner from "../common/LoadingSpinner";
import { t } from "i18next";

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
				map: "",
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
					title={t("MessageError")}
					text={t("MessageErrorText")}
					type="error"
				/>
			) : (
				success && (
					<Message
						id={success}
						title={t("Success")}
						text={t("SuccessText")}
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

			<div className="w-screen md:h-[calc(100%-2.5rem)] h-screen max-md:overflow-y-scroll">
				<div className="w-[calc(100vw-7.5rem)] h-full  flex items-center justify-between gap-7 max-md:w-full max-md:flex-col max-md:gap-3">
					<div className="h-full w-[calc(50vw-5rem)] max-md:w-[calc(100vw-1rem)] bg-black/40 md:ml-3 rounded-3xl border border-primary/40 flex items-center flex-col justify-between py-5 px-10 max-md:h-130 max-md:mt-3">
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
									{t("AdminTitle")}
								</Input>
								<input
									type="submit"
									value={t("Ok")}
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
									<Hint>{t("DoubleClickToEdit")}</Hint>
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
										{t("AdminDescription")}
									</TextField>
									<input
										type="submit"
										value={t("Ok")}
										className="bg-primary text-white rounded-xl px-4 py-2 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-all duration-300 w-20 self-center"
									></input>
								</form>
							</div>
						) : (
							<div
								className="relative group text-white"
								onDoubleClick={() => setEditDescription(true)}
							>
								<h1 className="text-white h-40 overflow-scroll max-w-85 wrap-anywhere">
									{description}
								</h1>
								<Hint>{t("DoubleClickToEdit")}</Hint>
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
							{t("Submit")}
						</div>
					</div>

					<div className="h-full w-[50vw] bg-black/40 rounded-3xl border border-primary/40 flex flex-col items-center justify-center overflow-y-scroll max-md:w-[calc(100vw-1rem)] max-md:min-h-80 max-md:max-h-180 max-md:h-fit py-5">
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
									<div className="h-7 shrink-0 w-0.5 bg-primary/50 shadow-[0_0_20px_#006e2a]"></div>
								</>
							);
						})}
						<div
							className="px-6 py-2 border border-primary/50 rounded-full flex gap-3 text-white items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300"
							onClick={createStep}
						>
							<PlusIcon className="stroke-white w-5" /> {t("Add")}
						</div>
					</div>
				</div>

				<div className="md:hidden mt-6 mb-25 flex items-center justify-center bg-black/40 py-7 rounded-3xl border border-primary/50 ml-3 max-md:w-[calc(100vw-1.5rem)]">
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
