import updateUserXp from "@/utils/backend/users/updateUserXp";
import type { User } from "@/utils/types";
import { ArrowRight, Diamond } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
	xp: number;
	userData: User | undefined;
}

const Complete = ({ xp, userData }: Props) => {
	const navigate = useNavigate();

	return (
		<>
			<div className="flex items-center justify-center flex-col h-full w-full relative">
				<div className="text-white flex flex-col items-center justify-center absolute -translate-1/2 left-1/2 top-1/2 ">
					<img src="/medusa.png" className="w-100" />
					<p className="text-lg font-bold">
						Congrats Traveler! You've completed the lesson!
					</p>
					<p>You've gained incredeble knowledge and skills</p>
					<p className="flex gap-2 mt-1">
						Here's your reward
						<span className="flex gap-1 text-primary">
							{xp} <Diamond className="w-5"></Diamond>
						</span>
					</p>
					<button
						className="text-white flex items-center justify-center gap-2 px-6 py-2 bg-primary rounded-full mt-3 cursor-pointer group"
						onClick={async () => {
							updateUserXp(userData?.userId || "", xp);
							navigate("/");
						}}
					>
						Complete{" "}
						<ArrowRight className="w-5 group-hover:translate-x-1 transition-all duration-300"></ArrowRight>
					</button>
				</div>
			</div>
		</>
	);
};

export default Complete;
