interface Props {
	children: string;
	href: string;
}

const NavbarElement = ({ children, href }: Props) => {
	return (
		<a className="text-white" href={href}>
			{children}
		</a>
	);
};

export default NavbarElement;
