import { MoveRight } from "lucide-react";
interface Props {
    index: number
    text: string
    title: string
    description: string
    button: string
}

const Card = ({ title, description, button, index, text }: Props) => {
    return (
        <div className="w-82 rounded-2xl border border-white/5 mx-10 my-10 px-10 py-5 hover:-translate-y-3 transition-all duration-300">
            <p className="text-green-400 text-[10px]">{index} / {text}</p>
            <h4 className="mt-3 text-[15px]  text-white">{title}</h4>
            <p className="mt-3 text-[12px] text-white">{description}</p>
            <div className="gap-3 mt-5 flex items-center group">
                <h6 className="text-xs text-green-400">{button}</h6>
                <MoveRight className="stroke-white w-4 group-hover:translate-x-1 transition-all duration-150" />
            </div>
        </div>
    );
}

export default Card;
