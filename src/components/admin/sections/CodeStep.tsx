import Hint from "@/components/common/Hint";
import TextField from "@/components/inputs/TextField";
import type { Step } from "@/utils/types";
import { t } from "i18next";
import type { Dispatch, SetStateAction } from "react";

interface Props {
	editAnswer: string | undefined;
	setEditAnswer: Dispatch<SetStateAction<string | undefined>>;
	submitAnswer: () => void;
	children: Step;
}

const CodeStep = ({ editAnswer, setEditAnswer, submitAnswer, children }: Props) => {
	return (
		<div className="my-5">
			{editAnswer !== undefined ? (
				<form action={submitAnswer} className="w-full flex flex-col">
					<TextField id="content" value={editAnswer} setValue={setEditAnswer}>
						{t("Code")}
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
					onDoubleClick={() => setEditAnswer(children.content)}
				>
					<p className="text-white wrap-anywhere overflow-scroll">
						{children.rightAnswer}
					</p>
					<Hint>{t("DoubleClickToEdit")}</Hint>
				</div>
			)}
		</div>
	);
};

export default CodeStep;
