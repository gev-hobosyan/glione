import ProfileCard from "@/components/cards/ProfileCard";
import { ClipboardCheck, Clock10, Flame, Percent } from "lucide-react";
import SimpleDashboard from "./SimpleDashboard";
import DashboardCalendar from "./DashboardCalendar";
import ProgressCard from "../cards/ProgressCard";

const Dashboard = () => {
	return (
		// <div className="h-full w-full bg-black/40 ml-3 rounded-3xl border border-primary/40">
		// 	<ProfileCard />
		// 	<div className="flex gap-10 ml-3">
		// 		<SimpleDashboard
		// 			number="9"
		// 			text="Streak (օրեր)"
		// 			icon={<Flame className="stroke-primary mt-1 ml-0.2" />}
		// 		/>
		// 		<SimpleDashboard
		// 			number="5"
		// 			text="Ավարտված է"
		// 			icon={<ClipboardCheck className="stroke-primary mt-1 ml-0.5" />}
		// 		/>
		// 		<SimpleDashboard
		// 			number="32"
		// 			text="Ուսումնառության ժամեր"
		// 			icon={<Clock10 className="stroke-primary mt-1 ml-1 w-5" />}
		// 		/>
		// 		<SimpleDashboard
		// 			number="85"
		// 			text="Միջին միավոր"
		// 			icon={<Percent className="stroke-primary mt-1 ml-0.5 w-4.5" />}
		// 		/>
		// 	</div>
		// </div>
		
		<div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full text-white bg-black/40 ml-3 rounded-3xl border border-primary/40">
        	<SimpleDashboard className=" col-start-1 row-start-1 ml-2"
				number="9"
		 		text="Streak"
		 		icon={<Flame className="stroke-primary mt-1 ml-0.2" />}
			/>
    		<ProfileCard className="row-span-4 col-start-4 row-start-1 mr-3 mt-3"/>
    		<SimpleDashboard className="col-start-2 row-start-1"
				number="5"
		 		text="Ավարտված է"
				icon={<ClipboardCheck className="stroke-primary mt-1 ml-0.5" />}
			/>
    		<SimpleDashboard className="col-start-3 row-start-2"
				number="85"
		 		text="Միջին միավոր"
		 		icon={<Percent className="stroke-primary mt-1 ml-0.5 w-4.5" />}
			/>
    		<DashboardCalendar className="col-span-2 row-span-2 col-start-1 row-start-2 ml-3"/>
    		<div className="col-span-2 col-start-1 row-start-4">9</div>
    		<ProgressCard className="row-span-2 col-start-3 row-start-3"/>
    		<SimpleDashboard className="col-start-3 row-start-1"
				number="32"
		 		text="Ժամեր"
		 		icon={<Clock10 className="stroke-primary mt-1 ml-1 w-5" />}
			/>
		</div>
    
	);
};

export default Dashboard;
