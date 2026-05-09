import Hint from "@/components/common/Hint";
import TextField from "@/components/inputs/TextField";
import type { Step } from "@/utils/types";
import { t } from "i18next";
import type { Dispatch, SetStateAction } from "react";

interface Props {
	editContent: string | undefined;
	setEditContent: Dispatch<SetStateAction<string | undefined>>;
	submitContent: () => void;
	children: Step;
}

const TextStep = ({
	editContent,
	setEditContent,
	submitContent,
	children,
}: Props) => {
	return (
		<div className="my-5">
			{editContent !== undefined ? (
				<form action={submitContent} className="w-full flex flex-col">
					<TextField
						id="content"
						value={editContent}
						setValue={setEditContent}
					>
						{t("Content")}
					</TextField>
					<input
						type="submit"
						value={t("Ok")}
						className="bg-primary text-white rounded-xl px-4 py-2 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-all duration-300 self-center"
					></input>
				</form>
			) : (
				<div
					className="mt-5 group relative text-white"
					onDoubleClick={() => setEditContent(children.content)}
				>
					<p className="text-white max-w-full wrap-anywhere overflow-y-scroll whitespace-pre-line">
						{children.content}
					</p>
					<Hint>{t("DoubleClickToEdit")}</Hint>
				</div>
			)}
		</div>
	);
};

export default TextStep;
