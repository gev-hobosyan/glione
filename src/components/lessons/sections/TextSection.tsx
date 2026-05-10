import LoadingSpinner from "@/components/common/LoadingSpinner";
import { supabase } from "@/utils/supabaseClient";
import type { Step } from "@/utils/types";
import { t } from "i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import ImageFullscreen from "./ImageFullscreen";

interface Props {
	step: Step;
	changeCurrentStep: (direction: "next" | "prev") => void;
	selectedStep: number;
	stepCount: number;
	changeStatus: (status: "ns" | "completed" | "wrong", id: number) => void;
}

/**
 * TextSection is a component that displays a step with title, content, and navigation buttons.
 *
 * @param step - Current step data (title, content, id)
 * @param changeCurrentStep - Function to move between steps (next or previous)
 * @param selectedStep - Index of the current step
 * @param stepCount - Total number of steps
 * @param changeStatus - Updates the status of a step (completed, wrong, or not started)
 */
const TextSection = ({
	step,
	changeCurrentStep,
	selectedStep,
	stepCount,
	changeStatus,
}: Props) => {
	const matches = useMemo(
		() => [...step.content.matchAll(/\{\[(.+?)\]\}/g)],
		[step],
	);
	const filesUnique = useMemo(
		() => [...new Set(matches.map((f) => f[1]))],
		[matches],
	);

	const [files, setFiles] = useState<{ [key: string]: string } | undefined>(
		filesUnique.length !== 0 ? {} : undefined,
	);
	const [fileCount, setFileCount] = useState(0);
	const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

	const content = step.content.split(/\{\[(.+?)\]\}/);

	useEffect(() => {
		const getFiles = async () => {
			for (const fileName of filesUnique) {
				const {
					data: { publicUrl },
				} = supabase.storage.from("LessonImages").getPublicUrl(fileName);

				setFiles((prev) => {
					if (prev !== undefined) {
						prev[fileName] = publicUrl;
						setFileCount((prev) => prev + 1);
					}

					return prev;
				});
			}
		};

		getFiles();
	}, [filesUnique]);

	return (
		<>
			{imageUrl ? (
				<ImageFullscreen
					imageUrl={imageUrl}
					setImageUrl={setImageUrl}
				></ImageFullscreen>
			) : (
				<></>
			)}

			<div className="flex items-center justify-center flex-col h-full w-full relative">
				<p className="text-white text-wrap font-sans mb-7 text-xl">
					{step.title}
				</p>
				<div className="md:w-[calc(100%-200px)] w-[calc(100%-50px)] h-0.5 bg-white/70 rounded-full my-10"></div>

				{files === undefined ? (
					<p className="text-white text-wrap font-sans max-h-80 overflow-scroll text-center mx-10 md:mx-40 whitespace-pre-wrap">
						{step.content}
					</p>
				) : fileCount !== filesUnique.length ? (
					<div className="max-h-80 mx-10 md:mx-40">
						<LoadingSpinner></LoadingSpinner>
					</div>
				) : (
					<div className="text-white text-wrap font-sans max-h-80 overflow-scroll text-center mx-10 md:mx-40 whitespace-pre-wrap overflow-x-visible w-[calc(100%-3rem)] md:w-[calc(100%-10rem)] flex justify-center items-center flex-col gap-3">
						{content.map((part, index) => {
							if (filesUnique.find((file) => part === file)) {
								return (
									<img
									key={index}
										className="rounded-4xl border border-primary w-100 cursor-pointer"
										src={files[part]}
										onClick={() => {
											setImageUrl(files[part]);
										}}
									/>
								);
							}

							return part;
						})}
					</div>
				)}

				<div className="flex justify-center gap-6  text-white absolute bottom-10  ">
					<button
						onClick={() => changeCurrentStep("prev")}
						className={`group flex items-center gap-2 border border-white
    rounded-full px-6 py-2 text-sm cursor-pointer
		${selectedStep == 0 ? "hidden" : ""}`}
					>
						<ArrowLeft
							className=" transition duration-300 group-hover:-translate-x-0.5"
							size={18}
						/>
						{t("Previous")}
					</button>

					<button
						onClick={() => {
							changeStatus("completed", step._id!);
							changeCurrentStep("next");
						}}
						className={`group flex items-center gap-2 bg-green-900
    rounded-full px-10 py-2 text-sm cursor-pointer
		${selectedStep == stepCount - 1 ? "hidden" : ""}`}
					>
						{t("Next")}
						<ArrowRight
							className="transition duration-300 group-hover:translate-x-0.5"
							size={18}
						/>
					</button>
				</div>
			</div>
		</>
	);
};

export default React.memo(TextSection);
