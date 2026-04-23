import DashboardCalendar from "@/components/dashboard/DashboardCalendar/DashboardCalendar";
import DashboardImage from "./DashboardImage";
import ProfileCard from "@/components/cards/ProfileCard";
import { ClipboardCheck, Clock10, Flame, Percent } from "lucide-react";
import SimpleDashboard from "./SimpleDashboard";

const Dashboard = () => {
	return (
		<div className="h-full w-full bg-black/40 ml-3 rounded-3xl border border-primary/40">
			<ProfileCard />
			<DashboardCalendar />
			<DashboardImage />
			<div className="flex gap-10 ml-3">
				<SimpleDashboard
					number="9"
					text="Streak (օրեր)"
					icon={<Flame className="stroke-primary mt-1 ml-0.2" />}
				/>
				<SimpleDashboard
					number="5"
					text="Ավարտված է"
					icon={<ClipboardCheck className="stroke-primary mt-1 ml-0.5" />}
				/>
				<SimpleDashboard
					number="32"
					text="Ուսումնառության ժամեր"
					icon={<Clock10 className="stroke-primary mt-1 ml-1 w-5" />}
				/>
				<SimpleDashboard
					number="85"
					text="Միջին միավոր"
					icon={<Percent className="stroke-primary mt-1 ml-0.5 w-4.5" />}
				/>
			</div>
		</div>
	);
};

export default Dashboard;
