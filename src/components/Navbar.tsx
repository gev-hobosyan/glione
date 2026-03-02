import Link from "../components/Link";
import NavbarElement from "./NavbarElement";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center w-screen px-7 fixed top-5 z-50">
			<img src="/logo.svg" />
			<div className="flex justify-center items-center gap-5">
				<NavbarElement isActive={true} href="#home">
					Home
				</NavbarElement>
				<NavbarElement href="#about">About</NavbarElement>
				<NavbarElement href="#cources">Courses</NavbarElement>
				<NavbarElement href="#contact">Contact Us</NavbarElement>
			</div>
			<div className="flex items-center gap-5">
				<Link name="Sign in" to="/" />
				<PrimaryButton name="Get Started" />
			</div>
		</div>
	);
};

export default Navbar;
