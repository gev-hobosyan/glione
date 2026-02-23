import Link from "../components/Link";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center w-screen pt-5 px-7">
			<img src="/logo.svg" />
			<div className="flex items-center gap-5">
				<Link name="Sign in" to="/" />
				<PrimaryButton name="Get Started" />
			</div>
		</div>
	);
};

export default Navbar;
