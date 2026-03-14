import { LogOut, Settings, type LucideProps } from "lucide-react";
import React, {
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

const AdminSideBar = ({ tabs, activeTab, setActiveTab }: Props) => {
	return (
		<div className="h-full p-5 border border-primary/40 bg-black/40 rounded-3xl backdrop-blur-3x flex flex-col items-center justify-between">
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
				<LogOut className="stroke-red-700 hover:-translate-y-1 transition-all duration-300" />
				<Settings className="stroke-white hover:-translate-y-1 transition-all duration-300" />
			</div>
		</div>
	);
};

export default AdminSideBar;
