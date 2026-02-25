import Link from "../components/Link";
import GlassSurface from "./GlassSurface";
import NavbarElement from "./NavbarElement";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center w-screen pt-5 px-7 fixed top-0">
			<img src="/logo.svg" />
			<GlassSurface width={400} height={50} borderRadius={40}>
				<div className="flex justify-center items-center gap-5">
					<NavbarElement isActive={true} href="#home">
						Home
					</NavbarElement>
					<NavbarElement href="#about">About</NavbarElement>
					<NavbarElement href="#cources">Cources</NavbarElement>
					<NavbarElement href="#contact">Contuct Us</NavbarElement>
				</div>
			</GlassSurface>
			<div className="flex items-center gap-5">
				<Link name="Sign in" to="/" />
				<PrimaryButton name="Get Started" />
			</div>
		</div>
	);
};

export default Navbar;
