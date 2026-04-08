import type { Author, Tag } from "@/utils/types";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link, redirect } from "react-router-dom";

interface Props {
	name: string;
	description: string;
	progress: number;
	authors: Author[];
	tags: Tag[];
}

const LessonCard = ({ name, description, progress, authors, tags }: Props) => {
	return (
		<div
			className="w-96 h-48 border border-primary  text-white font-bold rounded-4xl px-5 py-3 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-effective transition-all duration-300"
			onClick={() => {
				throw redirect("/lesson");
			}}
		>
			<div className="flex-col gap-5 flex">
				<div className="flex items-center justify-between gap-1.5 ">
					<div className="flex items-center gap-3 overflow-hidden">
						<div className="border border-primary bg-primary/40 rounded-full p-1.5 shrink-0">
							<BookOpen className="w-5.5" />
						</div>
						<h2 className="text-xl">{name}</h2>
					</div>
					<div className="flex gap-1.5">
						{authors.map((author) => (
							<p className="text-[11px] text-gray-400" key={author.name}>
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
							className="text-[11px] border border-primary rounded-full px-2 py-0.5 bg-green-950"
							key={tag.name}
						>
							{tag.name}
						</p>
					))}
				</div>
				<Link
					to={"/lesson"}
					className="group flex text-[12px] items-center gap-2 cursor-pointer"
				>
					{progress ? "Continue" : "Start"}{" "}
					<ArrowRight className="w-4"></ArrowRight>
				</Link>
			</div>
		</div>
	);
};

export default LessonCard;
