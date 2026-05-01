import type { Author, Tag } from "@/utils/types";
import { t } from "i18next";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
	id: string;
	name: string;
	description: string;
	progress: number;
	authors: Author[];
	tags: Tag[];
}

/**
 * A Lesson card component that displayes a lesson preview.
 * @param {string} id - the id of the lesson.
 * @param {string} name - the title of the lesson.
 * @param {string} description - the description of the lesson.
 * @param {number} progress - progress of the lesson.
 * @param {Author[]} authors - list of lesson authors.
 * @param {Tag[]} tags - the tags of the lesson.
 */
const LessonCard = ({
	id,
	name,
	description,
	progress,
	authors,
	tags,
}: Props) => {
	const navigate = useNavigate();

	return (
		<div
			className="max-w-96 min-w-78 md:min-w-90 h-48 border border-primary  text-white font-bold rounded-4xl px-5 py-3 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-effective transition-all duration-300 group ml-auto mr-auto"
			onClick={() => navigate(`/lesson/${id}`)}
		>
			<div className="flex-col gap-5 flex">
				<div className="flex items-center justify-between gap-1.5 ">
					<div className="flex items-center gap-3 overflow-hidden">
						<div className="border border-primary bg-primary/40 rounded-full p-1.5 shrink-0">
							<BookOpen className="w-5.5" />
						</div>
						<h2 className="text-lg">{name}</h2>
					</div>
					<div
						className={`flex ${authors.length > 3 ? "w-30" : ""} flex-wrap items-center justify-center mt-2 group`}
					>
						{authors.map((author) => (
							<p
								className="text-[11px] text-gray-400 ml-1 mb-0.5"
								key={author.name}
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
							className="bg-primary h-full absolute z-0 rounded-full"
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
							key={tag.name}
						>
							{tag.name}
						</p>
					))}
				</div>

				<Link
					to={`/lesson/${id}`}
					className="group flex text-[12px] items-center gap-2 cursor-pointer"
				>
					{progress ? t("Continue") : "Start"}{" "}
					<ArrowRight className="w-4 group-hover:translate-x-0.5 transition-all duration-300"></ArrowRight>
				</Link>
			</div>
		</div>
	);
};

export default LessonCard;
