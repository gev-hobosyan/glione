import { ArrowRight, RotateCcw } from "lucide-react"

interface Props{
    title: string
    text: string
    type: "error" | "success"
}

const Message = ( {title, text, type} : Props) => {
    return(
        <>
        <div className="w-full h-full bg-black/50 backdrop-blur-lg absolute flex items-center justify-center z-50">
        <div className={`w-120 h-60 border ${type == "success" ? " border-primary/50 shadow-effective" : "border-red-600 shadow-[0_0_20px_#ff0000]" } flex flex-col items-center justify-center bg-black rounded-2xl gap-5`}>
            <p className="text-white text-[25px]">{title}</p>
            <p className="text-white text-[15px]">{text}</p>
            {type == "success" ?
            <div className="bg-primary px-5 py-1 rounded-2xl flex items-center justify-center gap-1 group">
                <p className="text-white text-[8px]">Check it out </p>
                <ArrowRight className="w-3 stroke-white group-hover:translate-x-0.5 transition duration-200 " />
            </div> :
            <div className="bg-red-600 px-5 py-1 rounded-2xl flex items-center justify-center gap-1 group">
                <p className="text-white text-[8px]">Try Again </p>
                <RotateCcw className="w-3 stroke-white group-hover:rotate-360 transition duration-500 " />
            </div> }
        </div>
        </div>
        </>
    )
}

export default Message