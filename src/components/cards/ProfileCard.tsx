import { UserAuth } from "@/context/AuthContext";
import { t } from "i18next";
import { CircleUserRoundIcon, Settings } from "lucide-react";

interface Props {
	className?: string;
}

/**
 * This is a profile card component used in dashboard, displaying user information.
 * @param {string} className - additional CSS class names for styling the card.
 */
const ProfileCard = ({ className = "" }: Props) => {
	//Gets the current user session from authentication, or null if not logged in.
	const session = UserAuth() ? UserAuth()?.session : null;
	return (
		<div
			className={`bg-black/50 w-full max-w-sm h-55 border border-primary rounded-3xl px-3 py-3 flex flex-col justify-center relative ${className}`}
		>
			<Settings className="stroke-white absolute right-4 w-5 hover:scale-105 transition-all duration-300 cursor-pointer top-3"></Settings>
			<h3 className="text-white absolute top-3 font-semibold">
				{t("MyProfile")}
			</h3>
			{session!["user"]["user_metadata"] ? (
				<img
					src={session!["user"]["user_metadata"]["avatar_url"]}
					width={"70px"}
					className="rounded-full self-center border-4 border-dark hover:scale-110 transition-all duration-300"
					referrerPolicy="no-referrer"
				/>
			) : (
				<CircleUserRoundIcon color="#fff" width={"48px"} />
			)}
			<p className="text-white self-center wrap-anywhere">
				{session!["user"]["user_metadata"]["name"]}
			</p>
			<p className="text-gray-500 self-center wrap-anywhere text-center">
				{session!["user"]["email"]}
			</p>
		</div>
	);
};

export default ProfileCard;
