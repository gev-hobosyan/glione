import DashboardCalendar from "../DashboardCalendar/DashboardCalendar";
import DashboardImage from "../DashboardImage";
import ProfileCard from "../ProfileCard";

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
