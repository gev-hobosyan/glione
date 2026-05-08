import type { Author } from "@/utils/types";
import { useMemo, useState } from "react";
import { t } from "i18next";
import Hint from "../../common/Hint";

interface Props {
	edit: (selectedAuthors: Author[]) => void;
	currentAuthors: Author[];
}

const authorsList: Author[] = [
	{ id: 0, name: "Gevorg" },
	{ id: 1, name: "Nataly" },
	{ id: 2, name: "Narek" },
	{ id: 3, name: "Nare" },
	{ id: 4, name: "Levon" },
];

/**
 * This is a React component that manages selection of authors from a predefined list. It allows adding/removing authors.
 * @param {function} edit - Initially selected authors when component loads.
 * @param {Author} currentAuthors - List of all available authors that can be selected.
 */
const EditAuthors = ({ edit, currentAuthors }: Props) => {
//This creates a state variable that stores the selected authors and allows it to be updated during the component’s lifecycle.
	const [selectedAuthors, setSelectedAuthors] =
		useState<Author[]>(currentAuthors);

//This creates a memoized list of authors that are not currently selected, and only recalculates when selectedAuthors changes.
	const allAuthors = useMemo(() => {
		return authorsList.filter((author) => {
			return !selectedAuthors.find((_a) => _a.id === author.id);
		});
	}, [selectedAuthors]);

	return (
		<>
			<div className="bg-black/20 backdrop-blur-xl w-screen h-screen absolute z-20 flex items-center justify-center"></div>
			<div className="px-20 py-20 bg-black/80 rounded-4xl border border-primary shadow-effective absolute z-40 left-1/2 top-1/2 -translate-1/2">
				<div className="flex flex-col items-center justify-center text-white">
					<p>Current Authors</p>
					<div className="flex gap-2 py-3">
						{selectedAuthors.map((author) => (
							<div
								className="bg-primary/40 border-primary border px-3 py-0.5 rounded-full backdrop-blur-lg cursor-pointer hover:scale-105 transition-all duration-300 relative group"
								key={author.id}
								onClick={() => {
									setSelectedAuthors((prev) =>
										prev.filter(
											(_author) => _author.id !== author.id,
										),
									);
								}}
							>
								<Hint>Click to remove</Hint>
								{author.name}
							</div>
						))}
					</div>
					<p>All Authors</p>
					<div className="flex gap-2 py-3">
						{allAuthors.map((author) => (
							<div
								className="bg-primary/40 border-primary border px-3 py-0.5 rounded-full backdrop-blur-lg cursor-pointer hover:scale-105 transition-all duration-300 relative group"
								key={author.id}
								onClick={() =>
									setSelectedAuthors((prev) => [...prev, author])
								}
							>
								<Hint>Click to add</Hint>
								{author.name}
							</div>
						))}
					</div>

					<input
						type="submit"
						value={t("Ok")}
						className="text-white px-6 py-2 bg-primary rounded-[9px] cursor-pointer hover:scale-105 transition-all duration-300"
						onClick={() => edit(selectedAuthors)}
					/>
				</div>
			</div>
		</>
	);
};

export default EditAuthors;
