import { useTranslation } from "react-i18next";

interface Props {
	className?: string;
}

type DayData = {
	day: string;
	value: number;
};

/**
 * This component shows a weekly chart with bars to display daily progress or activity.
 * * @param {string} className - additional extra CSS classes for styling
 */
const DashboardCalendar = ({ className = "" }: Props) => {
	const { t } = useTranslation();
	/**
	 * This represents weekly activity data
	 * @param {string} day - label for each day of the week
	 * @param {number} value - numeric progress value (used for bar height and percentage display)
	 */
	const weekData: DayData[] = [
		{ day: t("Sunday"), value: 20 },
		{ day: t("Monday"), value: 80 },
		{ day: t("Tuesday"), value: 60 },
		{ day: t("Wednesday"), value: 90 },
		{ day: t("Thursday"), value: 0 },
		{ day: t("Friday"), value: 0 },
		{ day: t("Saturday"), value: 0 },
	];
	return (
		<div
			className={`${className} border border-primary h-55 w-full rounded-2xl p-4 flex justify-between flex-col items-center`}
		>
			<h2 className="text-sm font-semibold text-white mb-3 mt-3">
				{t("WeeklyProgress")}
			</h2>

			<div className="flex items-end justify-between h-28 shrink-0 w-full">
				{weekData.map((d, i) => {
					const isActive = d.value > 0;

					return (
						<div
							key={i}
							className="flex flex-col items-center gap-1 w-8 hover:-translate-y-1 transition-all duration-300"
						>
							{isActive && (
								<span className="text-[10px] text-gray-400">
									{d.value}%
								</span>
							)}

							<div
								className={`w-5 rounded-full transition-all duration-300
                        ${
									isActive
										? "bg-green-600"
										: "bg-gray-600 bg-[repeating-linear-gradient(45deg,#4b5563,#4b5563_4px,#374151_4px,#374151_8px)]"
								}`}
								style={{
									height: `${Math.max(d.value, 8) * 0.8}px`,
								}}
							/>
							<span className="text-[10px] text-gray-400 mb-0.5">
								{d.day}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DashboardCalendar;
