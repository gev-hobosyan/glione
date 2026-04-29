import { t } from "i18next";

type Props = {
  percentage: number;
  className?: string;
};

export default function CircularProgress({
  percentage, className = ""
}: Props) {
  const radius = 60;
  const stroke = 14;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className={`flex flex-col items-center justify-center bg-black border border-primary p-4 rounded-2xl w-full h-55 ${className}`}>
      <h2 className="text-sm text-white mb-2 font-semibold">{t("YourProgress")}</h2>

      <div className="relative">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="-rotate-90"
        >
          <circle
            stroke="oklch(55.1% 0.027 264.364)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          <circle
            stroke="oklch(62.7% 0.194 149.214)"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>

      <div className="flex gap-4 mt-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          {t("Completed")}
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          {t("Pending")}
        </div>
      </div>
    </div>
  );
}