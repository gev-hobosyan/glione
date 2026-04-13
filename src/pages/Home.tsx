import { useRef, useState } from "react";
import { type IRefPhaserGame } from "@/game/PhaserGame";
import { BookOpenTextIcon, HomeIcon, type LucideProps } from "lucide-react";
import type { Tab } from "@/components/layout/sidebar/SideBar";
import SideBar from "@/components/layout/sidebar/SideBar";
import Lessons from "./Lessons";
import Dashboard from "@/components/dashboard/Dashboard";

const Home = () => {
	const [activeTab, setActiveTab] = useState(0);

	const tabs: Tab<Omit<LucideProps, "ref">>[] = [
		{
			id: 0,
			icon: HomeIcon,
			element: <Dashboard />,
		},
		{
			id: 1,
			icon: BookOpenTextIcon,
			element: <Lessons />,
		},
	];

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const phaserRef = useRef<IRefPhaserGame | null>(null);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const currentScene = (scene: Phaser.Scene) => {};

	return (
		<div className="flex h-screen px-4 py-3">
			<SideBar
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			{tabs[activeTab].element}
		</div>
	);
};

export default Home;
