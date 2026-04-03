import type { LucideProps } from "lucide-react";

export type Author = {
	name: string;
};

export type Tag = {
	name: string;
};

export type Step = {
	_id: number;
	title: string;
	type: string;
	content: string;
	predefinedCode?: string;
	rightAnswer?: string;
	choices?: [];
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
};

export type Choice = {
	text: string;
	isRight: boolean;
};

export type Lesson = {
	title: string;
	published: boolean;
	tags: Tag[];
	authors: Author[];
	section: string;
	steps?: Step[];
};
