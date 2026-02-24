import Link from "../components/Link";
import NavbarElement from "./NavbarElement";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center w-screen pt-5 px-7 fixed top-0">
			<img src="/logo.svg" />
			<div className="flex justify-center items-center gap-5 bg-white/20 px-10 py-3 rounded-4xl border-white border backdrop-blur-2xl left-auto right-auto">
				<NavbarElement href="#home">Home</NavbarElement>
				<NavbarElement href="#about">About</NavbarElement>
				<NavbarElement href="#cources">Cources</NavbarElement>
				<NavbarElement href="#contact">Contuct Us</NavbarElement>
			</div>
			<div className="flex items-center gap-5">
				<Link name="Sign in" to="/" />
				<PrimaryButton name="Get Started" />
			</div>
		</div>
	);
};

export default Navbar;
