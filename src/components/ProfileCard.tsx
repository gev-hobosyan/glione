import { UserAuth } from "@/context/AuthContext";
import { CircleUserRoundIcon, Settings } from "lucide-react";

const ProfileCard = () => {
	const session = UserAuth() ? UserAuth()?.session : null;
	return (
		<div className="min-w-65 max-w-70 h-80 border border-primary rounded-3xl px-3 py-3 flex flex-col  relative">
			<Settings className="stroke-white absolute right-4 w-5 hover:scale-105 transition-all duration-300 cursor-pointer"></Settings>
			<h3 className="text-white mb-2">My Profile</h3>
			<img src="/background.jpg" className="rounded-3xl max-w-65" />
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
