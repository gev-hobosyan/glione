import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminSideBar, { type Tab } from "@/components/admin/AdminSideBar";
import { BookOpenTextIcon, Home, type LucideProps } from "lucide-react";
import { useState } from "react";

const Admin = () => {
	const [activeTab, setActiveTab] = useState(0);

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
