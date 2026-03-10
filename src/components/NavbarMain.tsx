import { UserAuth } from "@/context/AuthContext";
import { CircleUserRoundIcon, Flame } from "lucide-react";
import { Worm } from "lucide-react";
import { Gem } from "lucide-react";

interface Props {
	logOut: () => void;
}

const NavbarMain = ({ logOut }: Props) => {
	const { session } = UserAuth();
	
	console.log(session);

	return (
		<div className="flex justify-between border border-white/20 rounded-2xl py-2.5 px-3 fixed top-2 left-2 right-2 bg-transparent backdrop-blur-sm z-50">
			<img src="logo.svg" />

			<div className="flex  gap-5 justify-center items-center">
				<div className="flex gap-1">
					<p className="text-white">71</p>
					<Flame color="#f8861b" />
				</div>

				<div className="flex gap-1">
					<p className="text-white">18</p>
					<Worm color="#1fb814" />
				</div>

				<div className="flex gap-1">
					<p className="text-white">65</p>
					<Gem color="#16e6e9" />
				</div>

				{session["user"]["user_metadata"] ? (
					<img
						src={session["user"]["user_metadata"]["avatar_url"]}
						width={"40px"}
						className="rounded-full"
						onClick={logOut}
						referrerPolicy="no-referrer"
					/>
				) : (
					<CircleUserRoundIcon
						color="#fff"
						width={"36px"}
						onClick={logOut}
					/>
				)}
			</div>
		</div>
	);
};

export default NavbarMain;
