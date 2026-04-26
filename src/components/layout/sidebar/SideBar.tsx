import Settings from "@/components/Settings/Settings";
import { UserAuth } from "@/context/AuthContext";
import {
	LogOut,
	Settings as SettingsIcon,
	type LucideProps,
} from "lucide-react";
import React, {
	useCallback,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";

interface Props {
	tabs: Tab<Omit<LucideProps, "ref">>[];
	activeTab: number;
	setActiveTab: Dispatch<SetStateAction<number>>;
}

export type Tab<P> = {
	id: number;
	icon: React.ForwardRefExoticComponent<P>;
	element: ReactNode;
};

const SideBar = ({ tabs, activeTab, setActiveTab }: Props) => {
	const signOut = UserAuth() ? UserAuth()?.signOut : undefined;
	const [openSettings, setOpenSettings] = useState<boolean>(false);

	const close = useCallback(() => {
		setOpenSettings(false);
	}, []);

	return (
		<>
			{openSettings && <Settings close={close} />}
			<div className="h-full p-5 border border-primary/40 bg-black/40 rounded-3xl backdrop-blur-3x flex flex-col items-center justify-between max-md:hidden">
				<div className="flex flex-col items-center">
					<img src="/icon.png" width={"40px"} />
					<div className="flex flex-col items-center gap-8 mt-30">
						{tabs.map((tab) => {
							return (
								<div
									className={`p-2.5 rounded-xl ${activeTab == tab.id && "bg-primary"} hover:-translate-y-1 transition-all duration-300`}
									onClick={() => setActiveTab(tab.id)}
								>
									<tab.icon className={`stroke-white`} />
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-col items-center gap-10">
					<LogOut
						className="stroke-red-700 hover:-translate-y-1 transition-all duration-300"
						onClick={signOut}
					/>
					<SettingsIcon
						className="stroke-white hover:-translate-y-1 transition-all duration-300"
						onClick={() => setOpenSettings(true)}
					/>
				</div>
			</div>
		</>
	);
};

export default SideBar;
