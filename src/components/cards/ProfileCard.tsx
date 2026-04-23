import { UserAuth } from "@/context/AuthContext";
import { CircleUserRoundIcon, Settings } from "lucide-react";

interface Props {
	className?: string
}

const ProfileCard = ({ className = ""} : Props) => {
	const session = UserAuth() ? UserAuth()?.session : null;
	return (
		<div className={`bg-black/50 min-w-65 max-w-70 h-80 border border-primary rounded-3xl px-3 py-3 flex flex-col relative ${className}`}>
			<Settings className="stroke-white absolute right-4 w-5 hover:scale-105 transition-all duration-300 cursor-pointer"></Settings>
			<h3 className="text-white mb-2">My Profile</h3>
			<div className="rounded-3xl max-w-65 border border-primary bg-black h-35"></div>
			{session!["user"]["user_metadata"] ? (
				<img
					src={session!["user"]["user_metadata"]["avatar_url"]}
					width={"80px"}
					className="rounded-full absolute top-35 left-1/2 -translate-x-1/2 border-4 border-dark"
					referrerPolicy="no-referrer"
				/>
			) : (
				<CircleUserRoundIcon color="#fff" width={"48px"} />
			)}
			<p className="text-white mt-10 self-center wrap-anywhere">
				{session!["user"]["user_metadata"]["name"]}
			</p>
			<p className="text-gray-500 self-center wrap-anywhere text-center">
				{session!["user"]["email"]}
			</p>
		</div>
	);
};

export default ProfileCard;
