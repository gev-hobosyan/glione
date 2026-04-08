import { useRef, useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import { type IRefPhaserGame } from "@/game/PhaserGame";
import { BookOpenTextIcon, HomeIcon, type LucideProps } from "lucide-react";
import AdminDashboard from "@/components/admin/AdminDashboard";
import type { Tab } from "@/components/SideBar";
import SideBar from "@/components/SideBar";
import Lessons from "./Lessons";
import Dashboard from "@/components/Dashboard";

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

	const phaserRef = useRef<IRefPhaserGame | null>(null);

	const currentScene = (scene: Phaser.Scene) => {

	};

	const { session, signOut } = UserAuth();

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
