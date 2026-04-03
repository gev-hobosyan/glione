import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminSideBar, { type Tab } from "@/components/admin/AdminSideBar";
import CreateLesson, {
	icons,
	type Step,
} from "@/components/admin/CreateLesson";
import {
	BookOpenTextIcon,
	Home,
	SquarePen,
	type LucideProps,
} from "lucide-react";
import { useState } from "react";
import Lessons from "./Lessons";

const Admin = () => {
	const [activeTab, setActiveTab] = useState(2);

	const [steps, setSteps] = useState<Step[]>([
		{
			id: 0,
			title: "First step",
			type: "text",
			content: "",
			icon: icons.text,
		},
		{
			id: 1,
			title: "Code",
			type: "code",
			content:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
			icon: icons.code,
		},
		{
			id: 2,
			title: "Multiple Choice",
			type: "multi",
			content: "",
			icon: icons.multi,
		},
	]);

	const tabs: Tab<Omit<LucideProps, "ref">>[] = [
		{
			id: 0,
			icon: Home,
			element: <AdminDashboard />,
		},
		{
			id: 1,
			icon: BookOpenTextIcon,
			element: <Lessons />,
		},
		{
			id: 2,
			icon: SquarePen,
			element: <CreateLesson steps={steps} setSteps={setSteps} />,
		},
	];

	return (
		<>
			<div className="flex h-screen py-3 px-5">
				<AdminSideBar
					tabs={tabs}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				{tabs[activeTab].element}
			</div>
		</>
	);
};

export default Admin;
