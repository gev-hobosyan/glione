import { MoveRight } from "lucide-react";
import React from "react";

interface Props {
	index: number;
	text: string;
	title: string;
	description: string;
	buttonText: string;
}

/**
 * This is a card component used on the landing page to display feature highlights.
 * @param {number} index - used to control the order in which cards are displayed.
 * @param {string} text -  card label in the format "XX/title" (e.g., "01/module")
 * @param {string} title - the title of the Card component.
 * @param {string} description - description text displayed on the card.
 * @param {string} buttonText - text displayed on the card's button.
 */
const Card = ({ title, description, index, text, buttonText }: Props) => {
	return (
		<>
			<div
				className={`card-wrapper w-85 h-45 hover:-translate-y-3 transition-all duration-300 z-0`}
			>
				<div className="card-content w-82 rounded-2xl border border-white/5 px-10 py-5 flex flex-col justify-center">
					<p className="text-secondary text-[10px]">
						{index >= 10 ? index : `0${index}`} / {text}
					</p>
					<h4 className="mt-3 text-[15px]  text-white">{title}</h4>
					<p className="mt-3 text-[12px] text-white">{description}</p>
					<div className="gap-3 mt-5 flex items-center group cursor-pointer">
						<h6 className="text-xs text-secondary">{buttonText}</h6>
						<MoveRight className="stroke-secondary w-4 group-hover:translate-x-1 transition-all duration-150" />
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(Card);
