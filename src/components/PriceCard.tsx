import PrimaryButton from "./PrimaryButton";

interface Props {
    title: string;
    description: string;
    price: string;
    features: string[];
}

const PriceCard = ({ title, description, price, features }: Props) => {
    return (
        <>
            <div className="h-110 w-100 rounded-2xl border border-green-900 px-10 py-5 hover:-translate-y-3 transition-all duration-300">
                <h4 className="text-white text-[25px]">{title}</h4>
                <p className="text-gray-500 mt-3 text-[12px]">{description}</p>
                <p className="text-white mt-5 text-[20px] mb-5">{price}</p>
                <PrimaryButton name="Get Started" />
                <p className="text-white mt-5">Everything in {title} includes:</p>
                <ul className="mt-3 space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="text-gray-400 text-[13px] flex items-center gap-2">
                            <span className="text-white">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default PriceCard;