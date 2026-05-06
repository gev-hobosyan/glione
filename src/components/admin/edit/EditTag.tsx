import type { Tag } from "@/utils/types";
import Input from "../../inputs/Input";
import { useState, type Dispatch, type SetStateAction } from "react";
import { t } from "i18next";

interface Props {
	children: Tag;
	edit: Dispatch<SetStateAction<Tag | undefined>>;
	submit: (text: string) => void;
}

const EditTag = ({ children: tag, submit }: Props) => {
	const [text, setText] = useState<string>(tag.name);

	return (
		<>
			<div
				className="bg-black/20 backdrop-blur-xl w-screen h-screen absolute z-20 flex items-center justify-center"
				onClick={() => submit(text)}
			></div>
			<div className="px-20 py-20 bg-black/80 rounded-4xl border border-primary shadow-effective absolute z-40 left-1/2 top-1/2 -translate-1/2">
				<form
					className="flex items-center justify-center flex-col gap-5"
					action={() => submit(text)}
				>
					<Input id="tag" type="text" value={text} setValue={setText}>
						{t("Tag")}
					</Input>
					<input
						type="submit"
						value={t("Ok")}
						className="text-white px-6 py-2 bg-primary rounded-[9px] cursor-pointer hover:scale-105 transition-all duration-300"
					/>
				</form>
			</div>
		</>
	);
};

export default EditTag;
