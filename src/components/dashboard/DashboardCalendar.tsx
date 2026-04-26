import { t } from "i18next";

interface Props {
  className?: string;
}

type DayData = {
  day: string;
  value: number;
};

const weekData: DayData[] = [
  { day: "S", value: 20 },
  { day: "M", value: 80 },
  { day: "T", value: 60 },
  { day: "W", value: 90 },
  { day: "T", value: 0 },
  { day: "F", value: 0 },
  { day: "S", value: 0 },
];

const DashboardCalendar = ({ className = "" }: Props) => {
  return (
    <div className={`${className} border border-primary h-55 w-full rounded-2xl p-4 flex justify-between flex-col items-center`}>
      
      <h2 className="text-sm font-semibold text-white mb-3 mt-3">
        {t("WeeklyProgress")}
      </h2>

      <div className="flex items-end justify-between h-28 shrink-0 w-full">
        {weekData.map((d, i) => {
          const isActive = d.value > 0;

          return (
            <div key={i} className="flex flex-col items-center gap-1 w-8 ">
              
              {isActive && (
                <span className="text-[10px] text-gray-400">
                  {d.value}%
                </span>
              )}

              <div className={`w-5 rounded-full transition-all duration-300
                        ${isActive 
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