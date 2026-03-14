import DashboardCalendar from "./DashboardCalendar/DashboardCalendar";
import DashboardImage from "./DashboardImage";
import ProfileCard from "./ProfileCard";

const Dashboard = () => {
    return (
        <>
            <ProfileCard />
            <DashboardCalendar />
            <DashboardImage />
        </>
    )
}


export default Dashboard;