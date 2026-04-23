interface Props {
    className?: string,
}

const ProgressCard = ({ className = "" } : Props) => {
    return (
        <div className={`${className} border border-primary h-40 w-50 rounded-2xl`}></div>
    )
}

export default ProgressCard;