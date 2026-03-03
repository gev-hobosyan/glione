import Link from "../components/Link";
import NavbarElement from "./NavbarElement";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="flex justify-between items-center w-screen px-7 fixed top-7 z-50">
				<img src="/logo.svg" />
				<div className="flex items-center gap-5">
					<Link name="Sign in" to="/login" />
					<PrimaryButton name="Get Started" />
				</div>
			</div>
			<div className="flex justify-center items-center gap-5 bg-white/20 backdrop-blur-xs border border-white/50 rounded-full px-20 py-3 fixed top-7 z-50 max-xl:hidden">
				<NavbarElement isActive={true} href="#home">
					Home
				</NavbarElement>
				<NavbarElement href="#about">About</NavbarElement>
				<NavbarElement href="#cources">Courses</NavbarElement>
				<NavbarElement href="#contact">Contact Us</NavbarElement>
			</div>
		</div>
	);
};

export default Navbar;
