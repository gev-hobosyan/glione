import { useRef, useState } from "react";
// import NavbarMain from "@/components/NavbarMain";
// import CodeEditor from "@/components/CodeEditor";
import { UserAuth } from "@/context/AuthContext";
import { type IRefPhaserGame } from "@/game/PhaserGame";
import { BookOpenTextIcon, HomeIcon, type LucideProps } from "lucide-react";
import AdminDashboard from "@/components/admin/AdminDashboard";
import type { Tab } from "@/components/SideBar";
import SideBar from "@/components/SideBar";
import AddName from "@/components/AddName";
import ProfileCard from "@/components/ProfileCard";
import Dashboard from "@/components/Dashboard";
import LessonCard from "@/components/LessonCard";

const Home = () => {
	const [activeTab, setActiveTab] = useState(0);

	const tabs: Tab<Omit<LucideProps, "ref">>[] = [
		{
			id: 0,
			icon: HomeIcon,
			element: <AdminDashboard />,
		},
		{
			id: 1,
			icon: BookOpenTextIcon,
			element: undefined,
		},
	];

	const phaserRef = useRef<IRefPhaserGame | null>(null);

	const currentScene = (scene: Phaser.Scene) => {
		console.log(scene);
	};

	const { session, signOut } = UserAuth();

	console.log(session);

	return (
		<div className="flex h-screen py-3 px-5">
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