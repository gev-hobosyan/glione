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

/**
 * This is a Sidebar component for navigation between tabs.
 * @param Tab - list of sidebar tabs with icons and content.
 * @param {boolean} activeTab -  currently selected tab index.
 * @param setActiveTab - updates the active tab index
 */
const SideBar = ({ tabs, activeTab, setActiveTab }: Props) => {
	//Sign-out function from authenticatin.
	const signOut = UserAuth() ? UserAuth()?.signOut : undefined;
	//Settings panel open & close state.
	const [openSettings, setOpenSettings] = useState<boolean>(false);
	const close = useCallback(() => {
		setOpenSettings(false);
	}, []);

	return (
		<>
			{openSettings && <Settings close={close} />}
			<div className="h-[calc(100%-2.5rem)] p-5 border border-primary/40 bg-black/40 rounded-3xl backdrop-blur-3x flex flex-col items-center justify-between max-md:hidden">
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
					<SettingsIcon className="stroke-white hover:-translate-y-1 transition-all duration-300" />
				</div>
			</div>

			<div className="fixed bottom-6 z-10">
				<div className="md:hidden relative border border-primary/40 bg-black rounded-3xl backdrop-blur-3x px-3 py-3 flex items-center z-30">
					<div className="flex items-center gap-8">
						{tabs.slice(0, 2).map((tab) => {
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

					<div className="absolute -translate-y-1/2 -translate-x-1/2 left-1/2 bg-black p-4 z-50 -bottom-7 border border-primary/45 rounded-full">
						<img src="/icon.png" className="w-13" />
					</div>

					<div className="flex items-center gap-8 ml-30">
						<div
							className={`p-2.5 rounded-xl hover:-translate-y-1 transition-all duration-300`}
						>
							<LogOut className="stroke-red-700" onClick={signOut} />
						</div>
						<div
							className={`p-2.5 rounded-xl hover:-translate-y-1 transition-all duration-300`}
						>
							<SettingsIcon className="stroke-white" />
						</div>
					</div>
				</div>
			</div>
			{/*<div className="h-[calc(100%-2.5rem)] p-5 border border-primary/40 bg-black/40 rounded-3xl backdrop-blur-3x flex flex-col items-center justify-between max-md:hidden">
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
			</div>*/}
		</>
	);
};

export default SideBar;
