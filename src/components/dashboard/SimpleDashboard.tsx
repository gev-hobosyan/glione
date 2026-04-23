import type { ReactNode } from "react";


interface Props {
    number: string;
	text: string;
    icon: ReactNode;
}


const SimpleDashboard = ({ number, text, icon }: Props) => {
	return (
        <div className="border border-primary w-45 h-15 rounded-xl mt-5">
            <div className="flex ml-1">
                <p className="text-white ml-2 mt-1 text-lg">{number}</p>
                {icon}
            </div>
            <p className="text-gray-200 ml-2">{text}</p>
        </div>
)
} 


export default SimpleDashboard;