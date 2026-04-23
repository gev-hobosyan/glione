interface Props {
    className?: string,
}

const DashboardCalendar = ({ className = "" } : Props) => {
    return (
        <div className={`${className} border border-primary h-40 w-80 rounded-2xl`}>

        </div>
    ) 
}

export default DashboardCalendar;