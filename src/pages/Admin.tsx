import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminSideBar, { type Tab } from "@/components/admin/AdminSideBar";
import CreateLesson from "@/components/admin/CreateLesson";
import {
	BookOpenTextIcon,
	Home,
	SquarePen,
	type LucideProps,
} from "lucide-react";
import { useState } from "react";
import type { Step } from "@/utils/types";
import AdminLessons from "@/components/admin/AdminLessons";
import { useTranslation } from "react-i18next";
import useSessionStorage from "@/hooks/useSessionStorage";

const Admin = () => {
	const [activeTab, setActiveTab] = useSessionStorage("adminTab", 0);
	const { i18n } = useTranslation();

	const currentLang = i18n.language;

	const handleLanguageChange = () => {
		const languageToSet = currentLang == "en" ? "am" : "en";
		i18n.changeLanguage(languageToSet);
	};

	const tabs: Tab<Omit<LucideProps, "ref">>[] = [
		{
			id: 0,
			icon: Home,
			element: <AdminDashboard />,
		},
		{
			id: 1,
			icon: BookOpenTextIcon,
			element: <AdminLessons />,
		},
		{
			id: 2,
			icon: SquarePen,
			element: <CreateLesson />,
		},
	];

	return (
		<>
			<div className="flex h-screen items-center justify-around px-2 max-md:px-0">
				<AdminSideBar
					tabs={tabs}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				{tabs[activeTab].element}
				<div
					className="text-white absolute right-8 top-6 cursor-pointer"
					onClick={handleLanguageChange}
				>
					{currentLang}
				</div>
			</div>
		</>
	);
};

export default Admin;
