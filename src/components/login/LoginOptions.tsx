import { t } from "i18next";

interface Props {
	signIn: () => void;
}

/**
 * This component shows a Google sign-in button and calls signIn when clicked.
 * @param {function} signIn - is a function used to handle the login action
 */
const LoginOptions = ({ signIn }: Props) => {
	return (
		<>
			<div className="mt-4 flex items-center justify-center w-60">
				<div className="bg-gray-500 h-[1.5px] w-full"></div>
				<span className="text-gray-500 text-sm mx-3">{t("SignInOr")}</span>
				<div className="bg-gray-500 h-[1.5px] w-full"></div>
			</div>
			<div className="mt-5">
				<div
					className="text-white text-[16px] flex items-center justify-center gap-2 border border-white rounded-xl px-10 py-2.5 cursor-pointer hover:scale-105 transition-all duration-300"
					onClick={signIn}
				>
					{t("SignInWithGoogle")} <img src="/google.png" className="w-5" />
				</div>
			</div>
		</>
	);
};

export default LoginOptions;
