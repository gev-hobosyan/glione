import { UserAuth } from "@/context/AuthContext";
import { t } from "i18next";
import { X } from "lucide-react";

interface Props {
	close: () => void;
}

/**
 * This component creates settings for the user and keeps some info about the user. 
 * @param {function} close - function to close the window
 *
 */

//This function displays user settings using data from the current session
const Settings = ({ close }: Props) => {
	const session = UserAuth() ? UserAuth()?.session : null;
	const name = session
		? session["user"]["user_metadata"]["full_name"].split(" ")
		: ["Name", "Surname"];
	const phone = session ? session["user"]["phone"] : "phone";

	return (
		<>
			<div className="w-screen h-screen backdrop-blur-2xl z-10 absolute flex items-center justify-center">
				<div className="w-9/10 h-9/10 bg-black/70 rounded-4xl border border-primary shadow-effective flex items-center relative">
					<X
						onClick={close}
						className="stroke-white absolute top-5 right-5 cursor-pointer"
					></X>
					<div className=" w-[20%] h-full border border-primary rounded-4xl px-5 py-12 flex flex-col gap-7">
						<p className="text-white px-4 py-2 bg-primary rounded-4xl">
							{t("MyProfile")}
						</p>
						{/* <p className="text-white px-4 py-2">Security</p>
						<p className="text-white px-4 py-2">Billing</p>
						<p className="text-red-700 mt-3 px-4 py-2">Delete account</p> */}
					</div>

					<div className="w-[80%] h-full flex flex-col items-start justify-between px-6 py-13 text-wrap wrap-anywhere truncate">
						<p className="text-white">{t("MyProfile")}</p>
						<div className="border border-primary px-6 rounded-xl flex items-center w-full h-[25%]">
							<img
								className="rounded-full w-18 h-18"
								src={
									session
										? session["user"]["user_metadata"]["avatar_url"]
										: "/icon.png"
								}
							/>
							<div>
								<p className="text-white font-bold px-4 mt-1">
									{session
										? session["user"]["user_metadata"]["name"]
										: "Name"}
								</p>
								<p className="text-gray-400 px-4 mt-1">
									{session ? session["user"]["email"] : "Email"}
								</p>
							</div>
						</div>

						<div className="border border-primary px-4 rounded-xl w-full h-[55%] pt-2 pb-5">
							<p className="text-white mb-2">Personal information</p>
							<div className="grid grid-cols-2 grid-rows-3 gap-4 text-white h-full w-[60%] pb-5">
								<div>
									<p className="text-gray-400">First name</p>
									<p className="text-white">{name[0]}</p>
								</div>
								<div>
									<p className="text-gray-400">Last name</p>
									<p className="text-white">{name[1]}</p>
								</div>
								<div>
									<p className="text-gray-400">Email adress</p>
									<p className="text-white">
										{session ? session["user"]["email"] : "No email"}
									</p>
								</div>
								<div>
									<p className="text-gray-400">Phone number</p>
									<p className="text-white">
										{phone || "No Phone number"}
									</p>
								</div>
								<div>
									<p className="text-gray-400">Role</p>
									<p className="text-white">User</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Settings;
