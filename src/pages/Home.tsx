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
		<>
			{!session["user"]["user_metadata"]["name"] && <AddName />}
			<>
				<div className="flex h-screen py-3 px-5">
					<SideBar
						tabs={tabs}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					{tabs[activeTab].element}
				</div>

				{/*<NavbarMain logOut={signOut} />

				<div className="flex items-center justify-center h-screen">
					<div className="border border-white rounded-4xl p-5 bg-white">
						<PhaserGame
							ref={phaserRef}
							currentActiveScene={currentScene}
						/>
					</div>
				</div>

				<div className="h-screen w-screen flex items-center justify-center">
					<CodeEditor />
				</div>*/}
				
				<Dashboard />				
			</>
		</>
	);
};

export default Home;
