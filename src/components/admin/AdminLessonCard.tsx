import deleteLesson from "@/utils/backend/lessons/deleteLesson";
import type { Author, Tag } from "@/utils/types";
import { ArrowRight, BookOpen, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner";

interface Props {
	id: string;
	name: string;
	description: string;
	progress: number;
	authors: Author[];
	tags: Tag[];
	reload: () => void;
	published: boolean;
}

const AdminLessonCard = ({
	id,
	name,
	description,
	progress,
	authors,
	tags,
	reload,
	published,
}: Props) => {
	const [loading, setLoading] = useState<boolean>(false);

	const _deleteLesson = async () => {
		setLoading(true);
		try {
			await deleteLesson(id);
		} catch (e) {
			console.log(e);
		} finally {
			reload();
			setLoading(false);
		}
	};

	return (
		<div className="max-w-96 sm:min-w-78 min-w-85 md:min-w-90 h-48 border border-primary  text-white font-bold rounded-4xl px-5 py-3 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-effective transition-all duration-300 group relative ml-auto mr-auto">
			{loading && (
				<div className="rounded-4xl top-0 left-0 z-3 backdrop-blur-lg bg-black/30 h-full w-full flex items-center justify-center absolute">
					<LoadingSpinner></LoadingSpinner>
				</div>
			)}
			<div className="flex-col gap-5 flex">
				<div className="flex items-center justify-between gap-1.5 ">
					<div className="flex items-center gap-3 overflow-hidden">
						<div className="border border-primary bg-primary/40 rounded-full p-1.5 shrink-0">
							<BookOpen className="w-5.5" />
						</div>
						<h2
							className={`text-lg ${published ? "text-white" : "text-gray-400"}`}
						>
							{name}
						</h2>
					</div>
					<div
						className={`flex ${
							authors.length > 3 ? "w-30" : ""
						} flex-wrap items-center justify-center mt-2 group`}
					>
						{authors.map((author) => (
							<p
								className="text-[11px] text-gray-400 ml-1 mb-0.5"
								key={author.id}
							>
								{author.name}
							</p>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-[14px] opacity-80 text-gray-300 truncate">
						{description}
					</p>

					<div
						className={`w-full h-2 bg-gray-900 rounded-full transition-all duration-300 relative`}
					>
						<div
							className="bg-primary h-full absolute z-1 rounded-full"
							style={{ width: `${progress}%` }}
						></div>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1.5">
					{tags.map((tag) => (
						<p
							className="text-[11px] border border-primary rounded-full px-2 py-0.5 bg-primary/40 hover:scale-105 transition-all duration-300"
							key={tag.id}
						>
							{tag.name}
						</p>
					))}
				</div>

				<div className="flex items-center gap-3">
					<Link to={`/edit/${id}`}>
						<Pencil className="w-4 text-blue-400 cursor-pointer" />
					</Link>
					<Trash2
						onClick={_deleteLesson}
						className="w-4 text-red-400 cursor-pointer"
					/>

					<Link
						to={`/lesson/${id}`}
						className="group flex text-[12px] items-center gap-2 cursor-pointer"
					>
						{progress ? "Continue" : "Start"}{" "}
						<ArrowRight className="w-4 group-hover:translate-x-0.5 transition-all duration-300"></ArrowRight>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AdminLessonCard;
