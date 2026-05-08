import BlurCircle from "@/components/common/BlurCircle";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Complete = () => {
	return (
		<>
			<div className="flex items-center justify-center flex-col h-full w-full relative">
				<div className="text-white flex flex-col items-center justify-center absolute -translate-1/2 left-1/2 top-1/2 ">
					<BlurCircle />
					<BlurCircle />
					<BlurCircle top="-100px" left="-200px" />
					<BlurCircle bottom="-320px" right="-200px" />
					<img src="/medusa.png" className="w-100" />
					<p>Congrats Traveler! You've completed the lesson!</p>
					<p>You've gained incredeble knowledge and skills</p>

					<button className="text-white flex items-center justify-center gap-2 px-6 py-2 bg-primary rounded-full mt-3">
						Complete <ArrowRight className="w-5"></ArrowRight>
					</button>
				</div>
			</div>
		</>
	);
};

export default Complete;
