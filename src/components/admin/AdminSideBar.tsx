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
		<>
			<div className="h-[calc(100%-2.5rem)] p-5 border border-primary/40 bg-black/40 rounded-3xl backdrop-blur-3x flex flex-col items-center justify-between max-md:hidden">
				<div className="flex flex-col items-center">
					<img src="/icon.png" width={"40px"} />
					<div className="flex flex-col items-center gap-8 mt-30">
						{tabs.map((tab) => {
							return (
								<div
								key={tab.id}
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

			<div className="fixed bottom-6 z-10">
				<div className="md:hidden relative border border-primary/40 bg-black rounded-3xl backdrop-blur-3x px-3 py-3 flex items-center z-30">
					<div className="flex items-center gap-8">
						{tabs.slice(0, 2).map((tab) => {
							return (
								<div
								key={tab.id}
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
						{tabs.slice(2, 3).map((tab) => {
							return (
								<div
								key={tab.id}
									className={`p-2.5 rounded-xl ${activeTab == tab.id && "bg-primary"} hover:-translate-y-1 transition-all duration-300`}
									onClick={() => setActiveTab(tab.id)}
								>
									<tab.icon className={`stroke-white`} />
								</div>
							);
						})}
						<div
							className={`p-2.5 rounded-xl hover:-translate-y-1 transition-all duration-300`}
						>
							<Settings className="stroke-white" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminSideBar;
