import { ArrowRight } from "lucide-react"

const SuccessMessage = () => {
    return(
        <>
        <div className="w-full h-full bg-black/50 backdrop-blur-lg absolute flex items-center justify-center">
        <div className="w-120 h-60 border border-primary/50 flex flex-col items-center justify-center bg-black rounded-2xl shadow-effective gap-5">
            <p className="text-white text-[25px]">Success</p>
            <p className="text-white text-[15px]">Lesson is created successfully. Good Luck!</p>
            <div className="bg-primary px-5 py-1 rounded-2xl flex items-center justify-center gap-1">
                <p className="text-white text-[8px]">Next Page </p>
                <ArrowRight className="w-3 stroke-white " />
            </div>
        </div>
        </div>
        </>
    )
}

export default SuccessMessage