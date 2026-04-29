import type { ReactNode } from "react";


interface Props {
    number: string;
    text: string;
    icon: ReactNode;
    className?: string
}

/**
 * This component shows a value, an icon, and a description for displaying dashboard stats.
 * @param {string} number - main value displayed in the card
 * @param {string} text - description under the value
 * @param {ReactNode} icon - icon displayed next to the number
 * @param {string} className - additional extra CSS classes for styling
 */
const SimpleDashboard = ({ number, text, icon, className = "" }: Props) => {
    return (
        <div className={`border border-primary py-5 px-6 w-full rounded-xl ${className}`}>
            <div className="flex">
                <p className="text-white text-lg">{number}</p>
                {icon}
            </div>
            <p className="text-gray-200">{text}</p>
        </div>
    )
}


export default SimpleDashboard;