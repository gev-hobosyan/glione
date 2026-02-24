interface Props {
	children: string;
	href: string;
	isActive?: boolean;
}

const NavbarElement = ({ children, href, isActive = false }: Props) => {
	return (
		<div className="flex flex-col group">
			<a className="text-white" href={href}>
				{children}
			</a>
			<div
				className={`h-[1.5px] ${isActive ? "w-full" : "w-0"} rounded-full duration-200 transition-[width] bg-white group-hover:w-full`}
			></div>
		</div>
	);
};

export default NavbarElement;
