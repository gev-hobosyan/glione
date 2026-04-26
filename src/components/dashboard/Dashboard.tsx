import ProfileCard from "@/components/cards/ProfileCard";
import { ClipboardCheck, Clock10, Flame, Percent } from "lucide-react";
import SimpleDashboard from "./SimpleDashboard";
import DashboardCalendar from "./DashboardCalendar";import CircularProgress from "./CircularProgress";
import { t } from "i18next";

// const Dashboard = () => {
// 	return (

// 		<div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full text-white bg-black/40 ml-3 rounded-3xl border border-primary/40 max-md:flex max-md:flex-col max-md:items-center">
//         	<SimpleDashboard className=" col-start-1 row-start-1 ml-2"
// 				number="9"
// 		 		text={t("Streak")}
// 		 		icon={<Flame className="stroke-primary mt-1 ml-0.2" />}
// 			/>
//     		<ProfileCard className="row-span-4 col-start-4 row-start-1 mr-3 mt-3"/>
//     		<SimpleDashboard className="col-start-2 row-start-1"
// 				number="5"
// 		 		text={t("Finished")}
// 				icon={<ClipboardCheck className="stroke-primary mt-1 ml-0.5" />}
// 			/>
//     		<SimpleDashboard className="col-start-3 row-start-2"
// 				number="85"
// 		 		text={t("AvgScore")}
// 		 		icon={<Percent className="stroke-primary mt-1 ml-0.5 w-4.5" />}
// 			/>
//     		<DashboardCalendar className="col-span-2 row-span-2 col-start-1 row-start-2 ml-3"/>
//     		<div className="col-span-2 col-start-1 row-start-4">9</div>
// 			<div>
//     		<CircularProgress className="row-span-2 col-start-3 row-start-3 " percentage={41}/>
// 			</div>
//     		<SimpleDashboard className="col-start-3 row-start-1"
// 				number="32"
// 		 		text={t("HoursLearned")}
// 		 		icon={<Clock10 className="stroke-primary mt-1 ml-1 w-5" />}
// 			/>
// 		</div>
    
// 	);
// };

// export default Dashboard;

const Dashboard = () => {
	return (
		<div className="w-full min-h-screen p-3 bg-black/40 rounded-3xl border border-primary/40">
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<SimpleDashboard
					number="9"
					text={t("Streak")}
					icon={<Flame className="stroke-primary mt-1 ml-1" />}
				/>

				<SimpleDashboard
					number="5"
					text={t("Finished")}
					icon={<ClipboardCheck className="stroke-primary mt-1 ml-1" />}
				/>

				<SimpleDashboard
					number="32"
					text={t("HoursLearned")}
					icon={<Clock10 className="stroke-primary mt-1 ml-1 w-5" />}
				/>

				<SimpleDashboard
					number="85"
					text={t("AvgScore")}
					icon={<Percent className="stroke-primary mt-1 ml-1 w-4.5" />}
				/>

				<div className="sm:col-span-2 lg:col-span-2">
					<DashboardCalendar />
				</div>

				<div className="flex justify-center items-center">
					<CircularProgress percentage={41} />
				</div>

				<div className="xl:row-span-2">
					<ProfileCard />
				</div>

			</div>
		</div>
	);
};
export default Dashboard;