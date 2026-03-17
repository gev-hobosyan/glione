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
		<div>
			<LessonCard
				name="If / Else"
				description="Conditional statements and logic"
				level="10"
				progress={50}
				color="bg-blue-600/20 border-blue-500"
			/>

			<LessonCard
				name="Cycles"
				description="Fundamnets of cycles"
				level="10"
				progress="50"
				color="bg-purple-600/20 border-purple-500"
			/>

			<LessonCard
				name="Variables"
				description="Types of data and variables"
				level="4"
				progress="90"
				color="bg-green-600/20 border-green-500"
			/>
		</div>
	);
};

export default Home;
