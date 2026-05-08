import {
	Code,
	EditIcon,
	PlusIcon,
	SquareCheck,
	TextInitial,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import EditStep from "./EditStep";
import Input from "../../inputs/Input";
import LessonCard from "../../lessons/LessonCard";
import TextField from "../../inputs/TextField";
import Message from "../Message";
import type { Author, Lesson, Step, Tag } from "@/utils/types";
import Hint from "../../common/Hint";
import EditTag from "./EditTag";
import LoadingSpinner from "../../common/LoadingSpinner";
import { t } from "i18next";
import ToggleSwitch from "../../ToggleSwitch";
import EditAuthors from "./EditAuthors";
import { supabase } from "@/utils/supabaseClient";
import { useParams } from "react-router-dom";
import getLessonById from "@/utils/backend/lessons/getLessonById";
import updateLesson from "@/utils/backend/lessons/updateLesson";

// eslint-disable-next-line react-refresh/only-export-components
export const icons = {
	text: TextInitial,
	code: Code,
	multi: SquareCheck,
};

const EditLesson = () => {
	const { id } = useParams();

	const [editStep, setEditStep] = useState<Step | undefined>(undefined);
	const [editTitle, setEditTitle] = useState<boolean>(true);
	const [editTag, setEditTag] = useState<Tag | undefined>();
	const [tags, setTags] = useState<Tag[]>([]);
	const [title, setTitle] = useState("");
	const [steps, setSteps] = useState<Step[]>([]);
	const [description, setDescription] = useState("");
	const [editDescription, setEditDescription] = useState<boolean>(true);
	const [authors, setAuthors] = useState<Author[]>([]);
	const [editAuthors, setEditAuthors] = useState<boolean>(false);

	const [currentStepId, setCurentStepId] = useState(0);
	const [currentTagId, setCurentTagId] = useState(0);

	const [success, setSuccess] = useState<string | undefined>(undefined);
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const [published, setPublished] = useState(true);
	const [files, setFiles] = useState<File[]>([]);

	useEffect(() => {
		const loadData = async () => {
			setLoading(true);
			try {
				if (id === undefined) throw new Error("id is required");

				const res = await getLessonById(id);

				setTitle(res.title);
				setDescription(res.description);
				setAuthors(res.authors);
				setSteps(
					res.steps?.map((step, index) => {
						return { ...step, id: index } as Step;
					}) || [],
				);
				setPublished(res.published);
				setTags(
					res.tags.map((tag, index) => {
						return { ...tag, id: index };
					}),
				);

				setCurentTagId(res.tags.length || 0);
				setCurentStepId(res.steps?.length || 0);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, [id]);

	const reload = useCallback(() => {
		setEditStep(undefined);
		setEditTitle(true);
		setEditTag(undefined);
		setTags([]);
		setTitle("");
		setDescription("");
		setEditDescription(true);

		setCurentStepId(0);
		setCurentTagId(0);

		setSuccess(undefined);
		setError(false);
		setLoading(false);
	}, []);

	const tryAgain = useCallback(() => {
		setLoading(false);
		setSuccess(undefined);
		setError(false);
	}, []);

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

	const changeAuthors = (selectedAuthors: Author[]) => {
		setAuthors(selectedAuthors);
		setEditAuthors(false);
	};

	const submitLesson = useCallback(async () => {
		const lesson: Lesson = {
			_id: id,
			title: title,
			published: published,
			description,
			tags,
			authors: authors,
			section: "Python",
			steps: steps,
		};

		setLoading(true);

		try {
			for (const file of files) {
				const { error } = await supabase.storage
					.from("LessonImages")
					.upload(file.name, file);

				console.log(file);

				if (error) {
					throw new Error(`${error}`);
				}
			}

			const res = await updateLesson(lesson);
			if (res.status == 200) {
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
	}, [authors, description, files, id, published, steps, tags, title]);

	if (id === undefined) {
		return <></>;
	}

	return (
		<>
			{editAuthors && (
				<EditAuthors
					edit={changeAuthors}
					currentAuthors={authors}
				></EditAuthors>
			)}
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
					reload={reload}
					tryAgain={tryAgain}
				/>
			) : (
				success && (
					<Message
						id={success}
						title={t("Success")}
						text={t("SuccessText")}
						type="success"
						reload={reload}
						tryAgain={tryAgain}
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

			<div className="w-screen h-screen max-md:overflow-y-scroll">
				<div className="w-full h-full flex items-center justify-around gap-7 max-md:flex-col max-md:gap-3">
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
											onDoubleClick={() => {
												setEditTag(tag);
											}}
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
							<div className="flex flex-col items-center gap-2">
								<div className="text-white flex items-center justify-center gap-2">
									{authors.map((author) => (
										<div className="bg-primary/40 border-primary border px-3 py-0.5 rounded-full backdrop-blur-lg cursor-pointer hover:scale-105 transition-all duration-300">
											{author.name}
										</div>
									))}
									<EditIcon
										className="text-xl cursor-pointer hover:scale-110 transition-all duration-200"
										onClick={() => setEditAuthors(true)}
									></EditIcon>
								</div>
								<div
									className="relative group text-white"
									onDoubleClick={() => setEditDescription(true)}
								>
									<h1 className="text-white h-40 overflow-scroll max-w-85 wrap-anywhere">
										{description}
									</h1>
									<Hint>{t("DoubleClickToEdit")}</Hint>
								</div>
							</div>
						)}
						<div className="max-md:hidden">
							<LessonCard
								id=""
								name={title}
								description={description}
								progress={100}
								authors={authors}
								tags={tags}
							></LessonCard>
						</div>

						<div className="flex flex-col items-center">
							<ToggleSwitch
								checked={published}
								handleSwitch={() => {
									setPublished((prev) => !prev);
								}}
							></ToggleSwitch>
							<p className="text-white my-1">Publish</p>
							<div
								className="text-white bg-primary px-10 py-4 rounded-3xl cursor-pointer hover:scale-110 transition duration-200"
								onClick={submitLesson}
							>
								{t("Submit")}
							</div>
						</div>
					</div>

					<div className="h-full w-[50vw] bg-black/40 rounded-3xl border border-primary/40 flex flex-col items-center justify-center overflow-y-scroll max-md:w-[calc(100vw-1rem)] max-md:min-h-80 max-md:max-h-180 max-md:h-fit py-5 relative">
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

						<div className="absolute text-white bottom-4 text-sm flex flex-col items-center justify-center max-h-15 overflow-y-scroll">
							<div>
								<input
									id="file_input"
									className="text-white hidden"
									type="file"
									onChange={(e) => {
										if (e.target.files !== null) {
											setFiles((prev) => [
												...prev,
												e.target.files![0],
											]);
										}
									}}
								></input>
								<label htmlFor="file_input" className="text-white">
									Choose images to upload
								</label>
							</div>
							{files.map((file) => (
								<p>{file.name}</p>
							))}
						</div>
					</div>
				</div>

				<div className="md:hidden mt-6 mb-25 flex items-center justify-center bg-black/40 py-7 rounded-3xl border border-primary/50 ml-3 max-md:w-[calc(100vw-1.5rem)]">
					<LessonCard
						id=""
						name={title}
						description={description}
						progress={100}
						authors={authors}
						tags={tags}
					></LessonCard>
				</div>
			</div>
		</>
	);
};

export default EditLesson;
