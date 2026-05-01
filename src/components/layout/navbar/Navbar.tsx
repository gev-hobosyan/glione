import { Link as DOMLink } from "react-router-dom";
import Link from "@/components/common/Link";
import NavbarElement from "./NavbarElement";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { t } from "i18next";

/**
 * This is the Navbar component used in the landing page for navigation.
 */
const Navbar = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="flex justify-between items-center w-screen px-7 fixed top-7 z-50">
				<img src="/logo.svg" />
				<div className="flex items-center gap-5">
					<div className="max-md:hidden">
						<Link name={t("Signin")} to="/login" />
					</div>
					<PrimaryButton>
						<DOMLink to="/signup">{t("GetStarted")}</DOMLink>
					</PrimaryButton>
				</div>
			</div>
			<div className="flex justify-center items-center gap-5 bg-white/20 backdrop-blur-xs border border-white/50 rounded-full px-20 py-3 fixed top-7 z-50 max-xl:hidden">
				<NavbarElement isActive={true} href="#home">
					{t("NavbarHome")}
				</NavbarElement>
				<NavbarElement href="#about">{t("NavbarAbout")}</NavbarElement>
				<NavbarElement href="#courses">{t("NavbarCourses")}</NavbarElement>
				<NavbarElement href="#pricing">{t("NavbarPricing")}</NavbarElement>
			</div>
		</div>
	);
};

export default Navbar;
