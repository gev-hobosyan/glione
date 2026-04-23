import DashboardCalendar from "../dashboard/DashboardCalendar/DashboardCalendar";
import DashboardImage from "../dashboard/DashboardImage";
import ProfileCard from "../cards/ProfileCard";

const AdminDashboard = () => {
	return (
		<div className="h-full w-full bg-black/40 ml-3 rounded-3xl border border-primary/40">
			<ProfileCard />
			<DashboardCalendar />
			<DashboardImage />
		</div>
	);
};

export default AdminDashboard;
