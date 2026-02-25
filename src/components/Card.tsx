import { MoveRight } from "lucide-react";

// interface Props {
// 	index: number;
// 	text: string;
// 	title: string;
// 	description: string;
// }
interface CardItem {
  index: number;
  text: string;
  title: string;
  description: string;
}

interface Props {
  firstCard: CardItem;
  secondCard: CardItem;
  thirdCard: CardItem;
  fourthCard: CardItem;
}

// const Card = ({ title, description, index, text }: Props) => {
// 	return (
// 		<>
// 			<div className="flex gap-6">
// 			<div className="w-82 rounded-2xl border border-white/5 mx-10 my-10 px-10 py-5 hover:-translate-y-3 transition-all duration-300">
// 				<p className="text-secondary text-[10px]">
// 					{index >= 10 ? index : `0${index}`} / {text}
// 				</p>
// 				<h4 className="mt-3 text-[15px]  text-white">{title}</h4>
// 				<p className="mt-3 text-[12px] text-white">{description}</p>
// 				<div className="gap-3 mt-5 flex items-center group cursor-pointer">
// 					<h6 className="text-xs text-secondary">View Details</h6>
// 					<MoveRight className="stroke-secondary w-4 group-hover:translate-x-1 transition-all duration-150" />
// 				</div>
// 			</div>
// 			<div className="w-82 rounded-2xl border border-white/5 mx-10 my-10 px-10 py-5 hover:-translate-y-3 transition-all duration-300">
// 				<p className="text-secondary text-[10px]">
// 					{index >= 10 ? index : `0${index}`} / {text}
// 				</p>
// 				<h4 className="mt-3 text-[15px]  text-white">{title}</h4>
// 				<p className="mt-3 text-[12px] text-white">{description}</p>
// 				<div className="gap-3 mt-5 flex items-center group cursor-pointer">
// 					<h6 className="text-xs text-secondary">View Details</h6>
// 					<MoveRight className="stroke-secondary w-4 group-hover:translate-x-1 transition-all duration-150" />
// 				</div>
// 			</div>
// 			</div>
// 		</>
// 	);
// };

// export default Card;

const Card = ({ firstCard, secondCard, thirdCard, fourthCard }: Props) => {
  const renderCard = (card: CardItem) => (
    <div className="w-82 rounded-2xl border border-white/5 mx-10 my-10 px-10 py-5 hover:-translate-y-3 transition-all duration-300">
      <p className="text-secondary text-[10px]">
        {card.index >= 10 ? card.index : `0${card.index}`} / {card.text}
      </p>
      <h4 className="mt-3 text-[15px] text-white">{card.title}</h4>
      <p className="mt-3 text-[12px] text-white">{card.description}</p>
      <div className="gap-3 mt-5 flex items-center group cursor-pointer">
        <h6 className="text-xs text-secondary">View Details</h6>
        <MoveRight className="stroke-secondary w-4 group-hover:translate-x-1 transition-all duration-150" />
      </div>
    </div>
  );

  return (
    <div className="flex gap-6">
      {renderCard(firstCard)}
      {renderCard(secondCard)}
	  {renderCard(thirdCard)}
	  {renderCard(fourthCard)}
    </div>
  );
};

export default Card;