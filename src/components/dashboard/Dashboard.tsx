import ProfileCard from "@/components/cards/ProfileCard";
import { ClipboardCheck, Clock10, Flame, Percent } from "lucide-react";
import SimpleDashboard from "./SimpleDashboard";
import DashboardCalendar from "./DashboardCalendar";
import CircularProgress from "./CircularProgress";
import { t } from "i18next";
import LessonsScroll from "./LessonsScroll";

const Dashboard = () => {
	return (
		<div className="w-[calc(100%-7rem)] h-[calc(100%-2.5rem)] p-3 bg-black/40 rounded-3xl border border-primary/40 grid grid-cols-4 grid-rows-5 gap-4">
			<SimpleDashboard
				className=""
				number="9"
				text={t("Streak")}
				icon={<Flame className="stroke-primary mt-1 ml-1" />}
			/>

			<SimpleDashboard
				className="col-start-1 row-start-2"
				number="5"
				text={t("Finished")}
				icon={<ClipboardCheck className="stroke-primary mt-1 ml-1" />}
			/>

			<SimpleDashboard
				className="col-start-1 row-start-3"
				number="32"
				text={t("HoursLearned")}
				icon={<Clock10 className="stroke-primary mt-1 ml-1 w-5" />}
			/>

			<SimpleDashboard
				className="col-start-1 row-start-4"
				number="85"
				text={t("AvgScore")}
				icon={<Percent className="stroke-primary mt-1 ml-1 w-4.5" />}
			/>

			<div className="row-span-2 col-start-2 row-start-1">
				<DashboardCalendar />
			</div>

			<div className="row-span-2 col-start-3 row-start-1">
				<CircularProgress percentage={41} />
			</div>

			<div className="row-span-2 col-start-4 row-start-1">
				<ProfileCard />
			</div>
			<div className=" col-span-3 row-span-2 row-start-4">
				<LessonsScroll />
			</div>
			<SimpleDashboard
				className="col-start-1 row-start-5"
				number="85"
				text={t("AvgScore")}
				icon={<Percent className="stroke-primary mt-1 ml-1 w-4.5" />}
			/>
			<div className="col-span-3 col-start-2 row-start-3 text-white border border-primary bg-black/50 rounded-xl text-center font-bold text-xl flex items-center justify-center">
				Be your best version
			</div>
		</div>
	);
};
export default Dashboard;
