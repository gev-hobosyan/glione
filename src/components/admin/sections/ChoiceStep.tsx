import type { Choice } from "@/utils/types";
import AdminChoice from "../AdminChoice";
import { PlusIcon } from "lucide-react";
import { t } from "i18next";

interface Props {
	children: Choice[] | undefined;
	newChoice: () => void;
	deleteChoice: (id: number) => void;
	check: (id: number) => void;
	changeText: (value: string, id: number) => void;
}

const ChoiceStep = ({
	children,
	check,
	newChoice,
	deleteChoice,
	changeText,
}: Props) => {
	return (
		<div className="w-full flex items-center justify-center flex-col">
			{children &&
				children.map((choice) =>
					choice.id !== undefined ? (
						<AdminChoice
						key={choice.id}
							changeText={(value: string) =>
								changeText(value, choice.id!)
							}
							check={() => {
								check(choice.id!);
							}}
							deleteChoice={() => deleteChoice(choice.id!)}
						>
							{choice}
						</AdminChoice>
					) : (
						<></>
					),
				)}

			<div
				className="px-4 py-2 w-fit border border-primary/50 rounded-full flex gap-3 text-white items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300"
				onClick={newChoice}
			>
				<PlusIcon className="stroke-white w-5" /> {t("Add")}
			</div>
		</div>
	);
};

export default ChoiceStep;
