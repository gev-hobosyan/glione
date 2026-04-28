import Hint from "@/components/common/Hint";
import TextField from "@/components/inputs/TextField";
import type { Step } from "@/utils/types";
import { t } from "i18next";
import type { Dispatch, SetStateAction } from "react";

interface Props {
	editMap: string | undefined;
	setEditMap: Dispatch<SetStateAction<string | undefined>>;
	submitMap: () => void;
	children: Step;
}

const CodeStep = ({ editMap, setEditMap, submitMap, children }: Props) => {
	return (
		<div className="my-5">
			{editMap !== undefined ? (
				<form action={submitMap} className="w-full flex flex-col">
					<TextField id="content" value={editMap} setValue={setEditMap}>
						{t("Map")}
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
					onDoubleClick={() => setEditMap(children.content)}
				>
					<p className="text-white wrap-anywhere overflow-scroll">
						{children.map}
					</p>
					<Hint>{t("DoubleClickToEdit")}</Hint>
				</div>
			)}
		</div>
	);
};

export default CodeStep;
