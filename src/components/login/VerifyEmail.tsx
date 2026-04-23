import { supabase } from "@/utils/supabaseClient";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import BlurCircle from "@/components/common/BlurCircle";

interface Props {
	email: string;
}

const VerifyEmail = ({ email }: Props) => {
	const resend = () => {
		supabase.auth.resend({
			type: "signup",
			email,
		});
	};

	return (
		<div className="w-screen h-screen absolute top-0 left-0 bg-black/70 backdrop-blur-xs flex items-center justify-center">
			<BlurCircle />
			<BlurCircle top="-80px" left="-70px" />
			<BlurCircle bottom="-150px" right="40px" />
			<BlurCircle right="-100px" top="100px" />
			<BlurCircle bottom="50px" left="50px" />

			<div className="w-150 h-120 bg-black/50 backdrop-blur-sm rounded-4xl border border-primary/50 shadow-effective flex items-center justify-center flex-col">
				<div className="flex flex-col items-center justify-center gap-5 text-center">
					<h1 className="text-white font-semibold text-2xl">
						Thank you for signing up!
					</h1>
					<p className="text-white/70">
						You've recived an email with confirmation link
						<br /> Just click and enter the dungeon
					</p>
					<PrimaryButton>
						<span onClick={resend}>Resend the code</span>
					</PrimaryButton>
				</div>
			</div>
		</div>
	);
};

export default VerifyEmail;
