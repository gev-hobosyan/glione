import ProfileCard from "@/components/cards/ProfileCard";
import { ClipboardCheck, Clock10, Diamond, Flame, Percent } from "lucide-react";
import SimpleDashboard from "./SimpleDashboard";
import DashboardCalendar from "./DashboardCalendar";
import CircularProgress from "./CircularProgress";
import { t } from "i18next";
import LessonsScroll from "./LessonsScroll";
import { UserAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import type { User } from "@/utils/types";
import getUserData from "@/utils/backend/users/getUserData";
import LoadingSpinner from "../common/LoadingSpinner";

// Displays a dashboard page with multiple cards, charts, and progress widgets arranged in a grid layout.
const Dashboard = () => {
	const session = UserAuth()?.session;
	const [userData, setUserData] = useState<User>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const loadData = async () => {
			setLoading(true);

			try {
				setUserData(await getUserData(session?.user.id || ""));
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, [session]);

	console.log(userData);

	return (
		<>
			{loading ? (
				<div className="w-[calc(100vw-2.5rem)] h-[calc(100vh-2.5rem)] bg-black border border-primary/40 absolute z-20 flex items-center justify-center -translate-1/2 left-1/2 top-1/2">
					<LoadingSpinner></LoadingSpinner>
				</div>
			) : (
				<div className="w-[calc(100%-7rem)] h-[calc(100%-2.5rem)] p-3 bg-black/40 rounded-3xl border border-primary/40 grid grid-cols-4 grid-rows-5 gap-4 max-md:flex flex-col max-md:overflow-y-scroll max-md:w-[calc(100%-2rem)] max-md:h-[calc(100%-7rem)] max-md:mb-25 max-md:mt-3">
					<div className="row-span-2 col-start-4 row-start-1 flex items-center justify-center">
						<ProfileCard />
					</div>

					<div className="grid max-md:grid-rows-3 max-md:grid-cols-4 gap-2 row-span-5 col-start-1 row-start-1">
						<SimpleDashboard
							className="max-md:col-span-2"
							number={userData?.streak || 0}
							text={t("Streak")}
							icon={<Flame className="stroke-primary" />}
						/>

						<SimpleDashboard
							className="col-start-1 row-start-2 max-md:col-span-2"
							number={userData?.streak || 0}
							text="XP"
							icon={<Diamond className="stroke-primary" />}
						/>

						<SimpleDashboard
							className="col-start-1 row-start-3 max-md:col-span-2 max-md:col-start-3 max-md:row-start-1"
							number={32}
							text={t("HoursLearned")}
							icon={<Clock10 className="stroke-primary" />}
						/>

						<SimpleDashboard
							className="col-start-1 row-start-4 max-md:col-span-2 max-md:col-start-3 max-md:row-start-2"
							number={0}
							text={t("AvgScore")}
							icon={<Percent className="stroke-primary" />}
						/>

						<SimpleDashboard
							className="col-start-1 row-start-5 max-md:col-span-4 max-md:row-start-3"
							number={2}
							text={t("DailyFinished")}
							icon={<ClipboardCheck className="stroke-primary" />}
						/>
					</div>

					<div className="col-span-3 col-start-2 row-start-3 text-white border border-primary rounded-xl text-center font-bold text-3xl flex items-center justify-center bg-[url(/strings2.png)] max-md:h-30 shrink-0">
						{t("DashboardText")}
					</div>

					<div className="row-span-2 col-start-2 row-start-1 flex items-center">
						<DashboardCalendar />
					</div>

					<div className="row-span-2 col-start-3 row-start-1 flex items-center">
						<CircularProgress percentage={41} />
					</div>

					<div className=" col-span-3 row-span-2 row-start-4">
						<LessonsScroll />
					</div>
				</div>
			)}
		</>
	);
};
export default Dashboard;
