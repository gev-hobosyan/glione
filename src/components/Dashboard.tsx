import DashboardCalendar from "./DashboardCalendar/DashboardCalendar";
import DashboardImage from "./DashboardImage";
import ProfileCard from "./ProfileCard";
import { ClipboardCheck, Clock10, Flame, Percent } from "lucide-react";
import SimpleDashboard from "./SimpleDashboard";

const Dashboard = () => {
	return (
		<>
			<ProfileCard />
			<DashboardCalendar />
			<DashboardImage />
			<div className="flex gap-10 ml-3">
				<SimpleDashboard
					number="9"
					text="Streak (days)"
					icon={<Flame className="stroke-primary mt-1 ml-0.2" />}
				/>
				<SimpleDashboard
					number="5"
					text="Completed!"
					icon={<ClipboardCheck className="stroke-primary mt-1 ml-0.5" />}
				/>
				<SimpleDashboard
					number="32"
					text="Hours learned."
					icon={<Clock10 className="stroke-primary mt-1 ml-1 w-5" />}
				/>
				<SimpleDashboard
					number="85"
					text="Avg score."
					icon={<Percent className="stroke-primary mt-1 ml-0.5 w-4.5" />}
				/>
			</div>
		</>
	);
};

export default Dashboard;
