import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminSideBar, { type Tab } from "@/components/admin/AdminSideBar";
import CreateLesson, { type Step } from "@/components/admin/CreateLesson";
import {
	BookOpenTextIcon,
	Code,
	Home,
	SquareCheck,
	SquarePen,
	TextInitial,
	type LucideProps,
} from "lucide-react";
import { useState } from "react";

const icons = {
	text: TextInitial,
	code: Code,
	multi: SquareCheck,
};

const Admin = () => {
	const [activeTab, setActiveTab] = useState(2);

	const [steps, setSteps] = useState<Step[]>([
		{
			id: 0,
			title: "First step",
			type: icons.text,
		},
		{
			id: 1,
			title: "Code",
			type: icons.code,
		},
		{
			id: 2,
			title: "Multiple Choice",
			type: icons.multi,
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
			element: undefined,
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
