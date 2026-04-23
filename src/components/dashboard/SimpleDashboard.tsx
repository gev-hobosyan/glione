import type { ReactNode } from "react";


interface Props {
    number: string;
	text: string;
    icon: ReactNode;
    className?: string
}


const SimpleDashboard = ({ number, text, icon, className = "" }: Props) => {
	return (
        <div className={`border border-primary w-60 h-35 rounded-xl mt-5 ${className}`}>
            <div className="flex ml-1">
                <p className="text-white ml-2 mt-1 text-lg">{number}</p>
                {icon}
            </div>
            <p className="text-gray-200 ml-2">{text}</p>
        </div>
)
} 


export default SimpleDashboard;