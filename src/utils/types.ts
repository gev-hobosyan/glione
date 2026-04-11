import type { LucideProps } from "lucide-react";

export type Author = {
	name: string;
};

export type Tag = {
	id?: number;
	_id?: number;
	name: string;
};

export type Step = {
	id: number;
	_id?: number;
	title: string;
	type: "text" | "multi" | "code";
	content: string;
	predefinedCode?: string;
	rightAnswer?: string;
	choices?: Choice[];
	icon?: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
};

export type Choice = {
	_id?: string;
	text: string;
	isRight: boolean;
	id?: number;
};

export type Lesson = {
	_id?: string;
	title: string;
	description: string;
	published: boolean;
	tags: Tag[];
	authors: Author[];
	section: string;
	steps?: Step[];
};
