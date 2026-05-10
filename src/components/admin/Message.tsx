import { t } from "i18next";
import { ArrowRight, CloudAlert, CloudCheck, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
	id: string;
	title: string;
	text: string;
	type: "error" | "success";
	reload: () => void;
	tryAgain: () => void;
}

/**
 * This component is used to display success or error messages after actions.
 * @param {string} id - the id of the lesson.
 * @param {string} title - the title of the message component (Success or Error).
 * @param {string} text - the text of the message component.
 * @param {string} type - defines the type of the message, can be "error" or "success".
 * @param {Function} reload - a function to refresh the whole page
 * @param {Function} tryAgain - a function to close the message while keeping the data
 */
const Message = ({ title, text, type, id, reload, tryAgain }: Props) => {
	const navigate = useNavigate();

	return (
		<>
			<div
				className="w-full h-full bg-black/50 backdrop-blur-lg absolute z-10"
				onClick={() => {
					if (type == "success") {
						reload();
					} else {
						tryAgain();
					}
				}}
			></div>
			<div
				className={`w-120 h-60 border ${type == "success" ? " border-primary/50 shadow-effective" : "border-red-600 shadow-[0_0_20px_#ff0000]"} flex flex-col items-center justify-center bg-black rounded-2xl gap-5 absolute -translate-1/2 left-1/2 top-1/2 z-11`}
			>
				<div className="flex items-center justify-center gap-3">
					{type == "success" ? (
						<CloudCheck className="stroke-green-700 w-7 h-7"></CloudCheck>
					) : (
						<CloudAlert className="stroke-red-700 w-7 h-7"></CloudAlert>
					)}
					<p className="text-white text-[25px]">{title}</p>
				</div>
				<p className="text-white text-[15px]">{text}</p>
				{type == "success" ? (
					<div
						className="bg-primary px-6 py-3 rounded-2xl flex items-center justify-center gap-1 group"
						onClick={() => {
							reload();
							navigate(`/lesson/${id}`);
						}}
					>
						<p className="text-white">{t("CheckItOut")}</p>
						<ArrowRight className="w-3 stroke-white group-hover:translate-x-0.5 transition duration-200 " />
					</div>
				) : (
					<div
						className="bg-red-600 px-5 py-2 rounded-2xl flex items-center justify-center gap-1 group"
						onClick={tryAgain}
					>
						<p className="text-white">{t("TryAgain")}</p>
						<RotateCcw className="w-5 stroke-white group-hover:rotate-360 transition duration-500 " />
					</div>
				)}
			</div>
		</>
	);
};

export default Message;
